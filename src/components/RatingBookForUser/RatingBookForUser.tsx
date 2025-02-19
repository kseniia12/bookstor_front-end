import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { rateBookThunk } from "../../store/thunk/thunkBook";
import { StyledRating, StylesWrapper } from "./style";

interface IPropsRating {
  bookId: number;
}

const RatingBook: React.FC<IPropsRating> = (props) => {
  const bookId = props.bookId;
  const rating = useAppSelector((state) => state.users.ratingBook);
  const ratingBook = rating[bookId];
  const [rate, setRate] = React.useState(ratingBook?.rate ?? 0);
  const user = useAppSelector((state) => state.users.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (rate > 0) {
      dispatch(rateBookThunk({ bookId, rate }));
    }
  }, [rate, bookId, dispatch]);

  return (
    <StylesWrapper>
      <StyledRating
        className="simple-controlled"
        value={rate}
        onChange={(event, newValue) => {
          if (newValue != null) {
            setRate(newValue);
          }
        }}
        readOnly={!user.id}
      />
    </StylesWrapper>
  );
};

export default RatingBook;
