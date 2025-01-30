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
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBookThunk.fulfilled, (state, action) => {
      state.book = action.payload.book;
    });
  },
});

export default bookSlice.reducer;
