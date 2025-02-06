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
      averageRating: 0,
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
      if (Array.isArray(action.payload.book)) {
        const booksObject = action.payload.book.reduce((acc, book) => {
          acc[book.id] = book; 
          return acc;
        }, {});
        state.book = booksObject; 
        state.price = action.payload.price; 
      } else {
        console.error("Это не массив");
      }
    });
  },
  },
);

export default bookSlice.reducer;
