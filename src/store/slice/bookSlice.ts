import { createSlice } from "@reduxjs/toolkit";

import { IBook, IResponsBook } from "../../lib/types/types";
import { getBookThunk } from "../thunk/thunkBook";

const initialState: IResponsBook = {
  bookNormalized: {
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
      averageRating: 0.0,
      author: {
        id: 0,
        name: "",
      },
    },
  },
  books: [],
  price: {
    minValue: 0,
    maxValue: 0,
  },
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
    sort: "1",
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
    builder.addCase(getBookThunk.fulfilled, (state, action) => {
      state.filters = action.payload.filters;
      state.meta = action.payload.meta;
      state.books = action.payload.book;
      if (Array.isArray(action.payload.book)) {
        const booksObject: IBooksObject = action.payload.book.reduce(
          (acc, book) => {
            acc[book.id] = book;
            return acc;
          },
          {} as IBooksObject
        );
        state.bookNormalized = booksObject;
        state.price = action.payload.price;
      } else {
        console.error("Это не массив");
      }
    });
  },
});

export default bookSlice.reducer;
