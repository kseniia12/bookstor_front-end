import { createSlice } from "@reduxjs/toolkit";

import { IResponsRecommendations } from "../../lib/types/types";
import { addBookToFavoritesThunk, getBookToFavoritesThunk } from "../thunk/thunkBook";


const initialState: IResponsRecommendations = {
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
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addBookToFavoritesThunk.fulfilled, (state, action) => {
      if (Array.isArray(action.payload.book)) {
        const booksObject = action.payload.book.reduce((acc, book) => {
          acc[book.id] = book; 
          return acc;
        }, {});
        state.book = booksObject; 
      } else {
        console.error("Это не массив");
      }
    });
    builder.addCase(getBookToFavoritesThunk.fulfilled, (state, action) => {
      if (Array.isArray(action.payload.book)) {
        const booksObject = action.payload.book.reduce((acc, book) => {
          acc[book.id] = book; 
          return acc;
        }, {});
        state.book = booksObject; 
      } else {
        console.error("Это не массив");
      }
    });
  },
  },
);

export default favoritesSlice.reducer;