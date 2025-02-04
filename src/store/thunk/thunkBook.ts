import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosAddBookToCart, axiosChangeCountBooks, axiosDeleteBookFromCart, axiosGetBook, axiosGetBookToCart, axiosGetFilter } from "../../API/bookApi";
import { IAddBookToCart, IDeleteBookToCart, IGetBookToCart, IReqBook, IReqDeleteBookToCart, IResponsBook, IResponsFilter } from "../../lib/typing";

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

export const changeCountBooksThunk = createAsyncThunk<IResponsFilter, IAddBookToCart>(
  "changeCountBooks/dBook",
  async (bookId: IAddBookToCart): Promise<IResponsFilter> => {
    const response = await axiosChangeCountBooks(bookId);
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

export const deleteBookToCartThunk = createAsyncThunk<IDeleteBookToCart, IReqDeleteBookToCart>(
  "deleteBookToCartThunk/dBook",
async (bookId: IReqDeleteBookToCart): Promise<IDeleteBookToCart> => {
    const response = await axiosDeleteBookFromCart(bookId);
    return response;
  }
);