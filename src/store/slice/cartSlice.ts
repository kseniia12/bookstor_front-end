import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook, ICartSlice, IGetBookToCart } from "../../lib/typing";
import { addBookToCartThunk, deleteBookToCartThunk, getBookToCartThunk } from "../thunk/thunkBook";
import { count } from "console";

const initialState: ICartSlice = {
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
  totalPrice: 0,
 
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addBookToCartThunk.fulfilled, (state, action) => {
      if (Array.isArray(action.payload.book)) {
        const booksObject = action.payload.book.reduce((acc, book) => {
          acc[book.id] = book; 
          return acc;
        }, {} as Record<string, IBook>);
        state.book = booksObject; 
        state.totalPrice = action.payload.totalPrice
      } else {
        console.error("Это не массив");
      }
    });
    builder.addCase(getBookToCartThunk.fulfilled, (state, action) => {
      if (Array.isArray(action.payload.book)) {
        const booksObject = action.payload.book.reduce((acc, book) => {
          acc[book.id] = book; 
          return acc;
        }, {} as Record<string, IBook>);
        state.book = booksObject; 
        state.totalPrice = action.payload.totalPrice
      } else {
        console.error("Это не массив");
      }
    });
  },
  },
);

export default cartSlice.reducer;
