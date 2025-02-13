import { createSlice } from "@reduxjs/toolkit";

import { IBook, IResponsBook } from "../../lib/types/types";
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
  bookNormalized: [],
  price: {
    minValue: 0,
    maxValue: 0,
  }
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
      state.bookNormalized = action.payload.book;
      if (Array.isArray(action.payload.book)) {
        const booksObject: IBooksObject = action.payload.book.reduce((acc, book) => {
          acc[book.id] = book;
          return acc;
        }, {} as IBooksObject);
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
