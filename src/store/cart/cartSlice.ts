import { createSlice } from "@reduxjs/toolkit";
import { IBook, ICartSlice } from "../../lib/types/types";
import {
  addBookToCartThunk,
  changeCountBooksThunk,
  deleteBookToCartThunk,
  getBookToCartThunk,
} from "./thunkCart";

const initialState: ICartSlice = {
  books: {},
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addBookToCartThunk.fulfilled, (state, action) => {
      const booksObject = action.payload.book.reduce((acc, book) => {
        acc[book.id] = book;
        return acc;
      }, {} as Record<string, IBook>);
      state.books = booksObject;
      state.totalPrice = action.payload.totalPrice;
    });
    builder.addCase(getBookToCartThunk.fulfilled, (state, action) => {
      const booksObject = action.payload.book.reduce((acc, book) => {
        acc[book.id] = book;
        return acc;
      }, {} as Record<string, IBook>);
      state.books = booksObject;
      state.totalPrice = action.payload.totalPrice;
    });
    builder.addCase(deleteBookToCartThunk.fulfilled, (state, action) => {
      for (const bookId of action.meta.arg.id) {
        if (state.books[bookId]) {
          delete state.books[bookId];
          state.totalPrice = 0;
        }
      }
    });
    builder.addCase(changeCountBooksThunk.fulfilled, (state, action) => {
      const booksObject = action.payload.book.reduce((acc, book) => {
        acc[book.id] = book;
        return acc;
      }, {} as Record<string, IBook>);
      state.books = booksObject;
      state.totalPrice = action.payload.totalPrice;
    });
  },
});

export default cartSlice.reducer;
