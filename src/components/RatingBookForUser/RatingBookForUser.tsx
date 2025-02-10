import React, { useEffect } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { rateBookThunk } from "../../store/thunk/thunkBook";
import { StylesWrapper } from "./style";

interface IPropsRating {
  bookId: number;
}

const RatingBook: React.FC<IPropsRating> = (props) => {
  const bookId = props.bookId;
  const rating = useAppSelector((state) => state.users.ratingBook);
  const ratingBook = rating[bookId];
  const [rate, setRate] = React.useState(ratingBook?.rate ?? 0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (rate > 0) {
      dispatch(rateBookThunk({ bookId, rate }));
    }
  }, [rate, bookId, dispatch]);

  return (
    <StylesWrapper>
      <Rating
        className="simple-controlled"
        value={rate}
        onChange={(event, newValue) => {
          if (newValue != null) {
            setRate(newValue);
          }
        }}
      />
    </StylesWrapper>
  );
};

export default RatingBook;
