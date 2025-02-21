import constant from "../lib/constants/constants";
import {
  IAddBookToCart,
  IBook,
} from "../lib/types/types";
import { axiosDefault } from "./axiosDefault";

export const axiosAddBookToFavorites = async (
  bookId: IAddBookToCart
): Promise<{ book: IBook[] }> => {
  const response = await axiosDefault.post<{ book: IBook[] }>(
    constant.FAVORITES,
    bookId
  );
  return response.data;
};

export const axiosGetBookToFavorites = async (): Promise<{
  book: IBook[];
}> => {
  const response = await axiosDefault.get<{
    book: IBook[];
  }>(constant.FAVORITES);
  return response.data;
};
