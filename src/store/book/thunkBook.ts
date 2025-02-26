import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  axiosGetBookById,
  axiosGetBooks,
  axiosGetFilter,
  axiosGetReccomendationsBook,
  axiosRateBook,
} from "../../API/bookApi";
import {
  IBook,
  IRateBook,
  IReqBook,
  IResponsBookPagination,
  IResponsFilter,
  IStateUser,
} from "../../lib/types/types";

export const getBooksThunk = createAsyncThunk<IResponsBookPagination, IReqBook>(
  "books/dBook",
  async (data: IReqBook): Promise<IResponsBookPagination> => {
    const response = await axiosGetBooks(data);
    return response;
  }
);

export const getBookByIdThunk = createAsyncThunk<IBook[], { bookId: number }>(
  "book/dBook",
  async (data: { bookId: number }): Promise<IBook[]> => {
    const response = await axiosGetBookById(data);
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

export const getRecommendationsBookThunk = createAsyncThunk<
  IBook[],
  {
    bookId: number;
  }
>(
  "getRecommendationsBook/dBook",
  async (data: { bookId: number }): Promise<IBook[]> => {
    const response = await axiosGetReccomendationsBook(data);
    return response;
  }
);

export const rateBookThunk = createAsyncThunk<IStateUser, IRateBook>(
  "rateBook/dBook",
  async (data: IRateBook): Promise<IStateUser> => {
    const response = await axiosRateBook(data);
    return response;
  }
);
