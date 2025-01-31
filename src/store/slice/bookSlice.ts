import { createSlice } from "@reduxjs/toolkit";

import { IResponsBook } from "../../lib/typing";
import { getBookThunk } from "../thunk/thunkBook";

const initialState: IResponsBook = {
  book: {
    key: {
      id: "",
      name: "",
      priceSoft: 0,
      priceHard: 0,
      description: "",
      cover: "",
      countHard: 0,
      countSoft: 0,
      bestseller: false,
      author: {
        id: 0,
        name: ""
      }
    },
  },
  price: {
    minValue: 0,
    maxValue: 0,
  }
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBookThunk.fulfilled, (state, action) => {
      state.book = action.payload.book;
      state.price = action.payload.price;
    });
  },
});

export default bookSlice.reducer;
