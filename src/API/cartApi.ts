import constant from "../lib/constants/constants";
import { IAddBookToCart, ICartSlice } from "../lib/types/types";
import { axiosDefault } from "./axiosDefault";

export const axiosAddBookToCart = async (
  bookId: IAddBookToCart
): Promise<ICartSlice> => {
  const response = await axiosDefault.post<ICartSlice>(constant.CART, bookId);
  return response.data;
};

export const axiosGetBookToCart = async (): Promise<ICartSlice> => {
  const response = await axiosDefault.get<ICartSlice>(constant.CART);
  return response.data;
};

export const axiosDeleteBookFromCart = async (bookId: {
  id: number;
}): Promise<{
  totalPrice: number;
}> => {
  const response = await axiosDefault.delete(constant.CART, { data: bookId });
  return response.data;
};

export const axiosChangeCountBooks = async (
  bookId: IAddBookToCart
): Promise<ICartSlice> => {
  const response = await axiosDefault.patch<ICartSlice>(constant.CART, bookId);
  return response.data;
};
