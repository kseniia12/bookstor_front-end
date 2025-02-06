import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  axiosAddBookToCart,
  axiosAddBookToFavorites,
  axiosaddCommentBook,
  axiosChangeCountBooks,
  axiosDeleteBookFromCart,
  axiosGetBook,
  axiosGetBookToCart,
  axiosGetBookToFavorites,
  axiosGetFilter,
  axiosGetReccomendationsBook,
  axiosRateBook,
} from "../../API/bookApi";
import {
  IAddBookToCart,
  IBook,
  IDeleteBookToCart,
  IGenRecommendations,
  IGetBookToCart,
  IPropsComment,
  IRateBook,
  IReqBook,
  IReqDeleteBookToCart,
  IResComment,
  IResponsBook,
  IResponsFilter,
  IResponsRecommendations,
} from "../../lib/typing";

export const getBookThunk = createAsyncThunk<IResponsBook, IReqBook>(
  "book/dBook",
  async (data: IReqBook): Promise<IResponsBook> => {
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

export const changeCountBooksThunk = createAsyncThunk<
  IResponsFilter,
  IAddBookToCart
>(
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

export const deleteBookToCartThunk = createAsyncThunk<
  IDeleteBookToCart,
  IReqDeleteBookToCart
>(
  "deleteBookToCartThunk/dBook",
  async (bookId: IReqDeleteBookToCart): Promise<IDeleteBookToCart> => {
    const response = await axiosDeleteBookFromCart(bookId);
    return response;
  }
);

export const getRecommendationsBookThunk = createAsyncThunk<
  IResponsRecommendations,
  IGenRecommendations
>(
  "getRecommendationsBook/dBook",
  async (data: IGenRecommendations): Promise<IResponsRecommendations> => {
    const response = await axiosGetReccomendationsBook(data);
    return response;
  }
);

export const rateBookThunk = createAsyncThunk<IRateBook, IRateBook>(
  "rateBook/dBook",
  async (data: IRateBook): Promise<IRateBook> => {
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

export const addCommentBookThunk = createAsyncThunk<IResComment, IPropsComment>(
  "comments/addCommentBook",
  async (data: IPropsComment): Promise<IResComment> => {
    const response = await axiosaddCommentBook(data);
    console.log(response)
    return response;
  }
);
