import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { StyledRating, StylesWrapper } from "./style";
import { rateBookThunk } from "../../store/book/thunkBook";

interface IPropsRating {
  bookId: number;
  rating: string;
}

const RatingBook: React.FC<IPropsRating> = (props) => {
  const user = useAppSelector((state) => state.users.user);
  const dispatch = useAppDispatch();

  const rateBook = (newValue: number) => {
    dispatch(rateBookThunk({ bookId: props.bookId, rate: newValue }));
  };

  return (
    <StylesWrapper>
      <StyledRating
        className="simple-controlled"
        value={Number(props.rating)}
        onChange={(_, newValue) => {
          if (newValue) {
            rateBook(newValue);
          }
        }}
        readOnly={!user}
      />
    </StylesWrapper>
  );
};

export default RatingBook;
