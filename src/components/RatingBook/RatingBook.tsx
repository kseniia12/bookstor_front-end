import React, { useEffect } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { rateBookThunk } from "../../store/thunk/thunkBook";

interface IPropsRating {
  bookId: number;
}

const RatingBook: React.FC<IPropsRating> = (props) => {
  const bookId = props.bookId;
  const rating = useAppSelector((state) => state.users.ratingBook);
  const [rate, setRate] = React.useState(rating.rate);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (rate > 0) {
      dispatch(rateBookThunk({ bookId, rate }));
    }
  }, [rate, bookId, dispatch]);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={rate}
        onChange={(event, newValue) => {
          if (newValue != null) {
            setRate(newValue);
          }
        }}
      />
    </Box>
  );
};

export default RatingBook;
