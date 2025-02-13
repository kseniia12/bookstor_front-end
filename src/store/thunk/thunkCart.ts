import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAddBookToCart, ICartSlice } from "../../lib/types/types";
import {
  axiosAddBookToCart,
  axiosChangeCountBooks,
  axiosDeleteBookFromCart,
  axiosGetBookToCart,
} from "../../API/cartApi";

export const addBookToCartThunk = createAsyncThunk<ICartSlice, IAddBookToCart>(
  "addBookToCartThunk/dBook",
  async (bookId: IAddBookToCart): Promise<ICartSlice> => {
    const response = await axiosAddBookToCart(bookId);
    return response;
  }
);

export const getBookToCartThunk = createAsyncThunk<ICartSlice>(
  "getBookToCartThunk/dBook",
  async (): Promise<ICartSlice> => {
    const response = await axiosGetBookToCart();
    return response;
  }
);

export const deleteBookToCartThunk = createAsyncThunk<
  {
    totalPrice: number;
  },
  { id: number }
>("deleteBookToCartThunk/dBook", async (bookId: { id: number }) => {
  const response = await axiosDeleteBookFromCart(bookId);
  return response;
});

export const changeCountBooksThunk = createAsyncThunk<
  ICartSlice,
  IAddBookToCart
>(
  "changeCountBooks/dBook",
  async (bookId: IAddBookToCart): Promise<ICartSlice> => {
    const response = await axiosChangeCountBooks(bookId);
    return response;
  }
);
