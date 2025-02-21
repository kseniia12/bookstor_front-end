import { createSlice } from "@reduxjs/toolkit";

import { IBook, IResponsRecommendations } from "../../lib/types/types";
import {
  addBookToFavoritesThunk,
  getBookToFavoritesThunk,
} from "./thunkFavorites";

const initialState: IResponsRecommendations = {
  book: {},
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addBookToFavoritesThunk.fulfilled, (state, action) => {
        const booksObject = action.payload.book.reduce((acc, book) => {
          acc[book.id] = book;
          return acc;
        }, {} as Record<string, IBook>);
        state.book = booksObject;
    });
    builder.addCase(getBookToFavoritesThunk.fulfilled, (state, action) => {
        const booksObject = action.payload.book.reduce((acc, book) => {
          acc[book.id] = book;
          return acc;
        }, {} as Record<string, IBook>);
        state.book = booksObject;

    });
  },
});

export default favoritesSlice.reducer;
