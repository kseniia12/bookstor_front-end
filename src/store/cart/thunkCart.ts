import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAddBookToCart, IGetBookToCart } from "../../lib/types/types";
import {
  axiosAddBookToCart,
  axiosChangeCountBooks,
  axiosDeleteBookFromCart,
  axiosGetBookToCart,
} from "../../API/cartApi";

export const addBookToCartThunk = createAsyncThunk<
  IGetBookToCart,
  IAddBookToCart
>(
  "addBookToCartThunk/dBook",
  async (bookId: IAddBookToCart): Promise<IGetBookToCart> => {
    const response = await axiosAddBookToCart(bookId);
    return response;
  }
);

export const getBookToCartThunk = createAsyncThunk<IGetBookToCart>(
  "getBookToCartThunk/dBook",
  async (): Promise<IGetBookToCart> => {
    const response = await axiosGetBookToCart();
    return response;
  }
);

export const deleteBookToCartThunk = createAsyncThunk<
  {
    totalPrice: number;
  },
  { id: number[] }
>("deleteBookToCartThunk/dBook", async (bookId: { id: number[] }) => {
  const response = await axiosDeleteBookFromCart(bookId);
  return response;
});

export const changeCountBooksThunk = createAsyncThunk<
  IGetBookToCart,
  IAddBookToCart
>(
  "changeCountBooks/dBook",
  async (bookId: IAddBookToCart): Promise<IGetBookToCart> => {
    const response = await axiosChangeCountBooks(bookId);
    return response;
  }
);
