import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IBook, IGetBookToCart, IResponsBook } from "../../lib/typing";
import { getBookThunk, getBookToCartThunk } from "../thunk/thunkBook";

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
    builder.addCase(getBookThunk.fulfilled, (state, action: PayloadAction<IResponsBook>) => {
      if (Array.isArray(action.payload.book)) {
        const booksObject = action.payload.book.reduce((acc: { [key: string]: IBook }, book: IBook) => {
          acc[book.id] = book; 
          return acc;
        }, {} as Record<string, IBook>);
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
