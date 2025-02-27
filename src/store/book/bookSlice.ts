import { createSlice } from "@reduxjs/toolkit";

import { IBook, IResponsBook } from "../../lib/types/types";
import { getBooksThunk } from "./thunkBook";

const initialState: IResponsBook = {
  bookNormalized: {},
  books: [],
  price: null,
  meta: null,
  filters: null,
};

interface IBooksObject {
  [key: string]: IBook;
}

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooksThunk.fulfilled, (state, action) => {
      state.filters = action.payload.filters;
      state.meta = action.payload.meta;
      state.books = action.payload.book;
      const booksObject = action.payload.book.reduce((acc, book) => {
        acc[book.id] = book;
        return acc;
      }, {} as IBooksObject);
      state.bookNormalized = booksObject;
      state.price = action.payload.price;
    });
  },
});

export default bookSlice.reducer;
