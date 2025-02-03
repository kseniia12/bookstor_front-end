import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosAddBookToCart, axiosGetBook, axiosGetBookToCart, axiosGetFilter } from "../../API/bookApi";
import { IAddBookToCart, IGetBookToCart, IReqBook, IResponsBook, IResponsFilter } from "../../lib/typing";

export const getBookThunk = createAsyncThunk<IResponsBook, IReqBook>(
  "book/dBook",
  async ( data : IReqBook): Promise<IResponsBook> => {
    const response = await axiosGetBook(data);
    return response;
  }
);

export const getFilterThunk = createAsyncThunk<IResponsFilter>(
  "filter/dBook",
  async (): Promise<IResponsFilter> => {
    const response = await axiosGetFilter();
    return response;
  }
);

export const addBookToCartThunk = createAsyncThunk<IResponsFilter, IAddBookToCart>(
  "addBookToCartThunk/dBook",
  async (bookId: IAddBookToCart): Promise<IResponsFilter> => {
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