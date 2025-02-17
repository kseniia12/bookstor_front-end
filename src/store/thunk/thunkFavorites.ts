import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAddBookToCart, IResponsRecommendations } from "../../lib/types/types";
import {
  axiosAddBookToFavorites,
  axiosGetBookToFavorites,
} from "../../API/favoritesApi";

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

export const getBookToFavoritesThunk =
  createAsyncThunk<IResponsRecommendations>(
    "getBookToFavoritesThunk/dBook",
    async (): Promise<IResponsRecommendations> => {
      const response = await axiosGetBookToFavorites();
      return response;
    }
  );
