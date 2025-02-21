import { createSlice } from "@reduxjs/toolkit";

import { IBook, IResponsBook } from "../../lib/types/types";
import { getBooksThunk } from "./thunkBook";

const initialState: IResponsBook = {
  bookNormalized: {},
  books: [],
  price: null,
  meta: {
    totalBooks: 0,
    totalPages: 1,
    currentPage: 1,
    hasNextPage: true,
    hasPrevPage: true,
  },
  filters: {
    genre: [""],
    maxPrice: "0.0",
    minPrice: "40.0",
    page: "1",
    sort: "price",
  },
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
      const booksObject = action.payload.book.reduce(
        (acc, book) => {
          acc[book.id] = book;
          return acc;
        },
        {} as IBooksObject
      );
      state.bookNormalized = booksObject;
      state.price = action.payload.price;
    });
  },
});

export default bookSlice.reducer;
