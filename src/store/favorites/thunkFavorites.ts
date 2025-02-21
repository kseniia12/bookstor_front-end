import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAddBookToCart, IBook } from "../../lib/types/types";
import {
  axiosAddBookToFavorites,
  axiosGetBookToFavorites,
} from "../../API/favoritesApi";

export const addBookToFavoritesThunk = createAsyncThunk<
  { book: IBook[] },
  IAddBookToCart
>(
  "addBookToFavorites/dBook",
  async (bookId: IAddBookToCart): Promise<{ book: IBook[] }> => {
    const response = await axiosAddBookToFavorites(bookId);
    return response;
  }
);

export const getBookToFavoritesThunk = createAsyncThunk<{
  book: IBook[];
}>(
  "getBookToFavoritesThunk/dBook",
  async (): Promise<{
    book: IBook[];
  }> => {
    const response = await axiosGetBookToFavorites();
    return response;
  }
);
