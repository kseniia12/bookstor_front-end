import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  axiosAddBookToFavorites,
  axiosGetBook,
  axiosGetBookToFavorites,
  axiosGetFilter,
  axiosGetReccomendationsBook,
  axiosRateBook,
} from "../../API/bookApi";
import {
  IAddBookToCart,
  IRateBook,
  IReqBook,
  IResponsBookPagination,
  IResponsFilter,
  IResponsRecommendations,
  IStateUser,
} from "../../lib/types/types";

export const getBookThunk = createAsyncThunk<IResponsBookPagination, IReqBook>(
  "book/dBook",
  async (data: IReqBook): Promise<IResponsBookPagination> => {
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

export const addBookToFavoritesThunk = createAsyncThunk<
  IResponsRecommendations,
  IAddBookToCart
>(
  "addBookToFavorites/dBook",
  async (bookId: IAddBookToCart): Promise<IResponsRecommendations> => {
    const response = await axiosAddBookToFavorites(bookId);
    return response;
  }
);

export const getRecommendationsBookThunk = createAsyncThunk<
  IResponsRecommendations,
  {
    bookId: number;
  }
>(
  "getRecommendationsBook/dBook",
  async (data: { bookId: number }): Promise<IResponsRecommendations> => {
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

export const getBookToFavoritesThunk =
  createAsyncThunk<IResponsRecommendations>(
    "getBookToFavoritesThunk/dBook",
    async (): Promise<IResponsRecommendations> => {
      const response = await axiosGetBookToFavorites();
      return response;
    }
  );


