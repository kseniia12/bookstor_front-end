import constant from "../lib/constants/constants";
import { IAddBookToCart, IGetBookToCart } from "../lib/types/types";
import { axiosDefault } from "./axiosDefault";

export const axiosAddBookToCart = async (
  bookId: IAddBookToCart
): Promise<IGetBookToCart> => {
  const response = await axiosDefault.post<IGetBookToCart>(
    constant.CART,
    bookId
  );
  return response.data;
};

export const axiosGetBookToCart = async (): Promise<IGetBookToCart> => {
  const response = await axiosDefault.get<IGetBookToCart>(constant.CART);
  return response.data;
};

export const axiosDeleteBookFromCart = async (bookId: {
  id: number[];
}): Promise<{
  totalPrice: number;
}> => {
  const response = await axiosDefault.delete(constant.CART, { data: bookId });
  return response.data;
};

export const axiosChangeCountBooks = async (
  bookId: IAddBookToCart
): Promise<IGetBookToCart> => {
  const response = await axiosDefault.patch<IGetBookToCart>(
    constant.CART,
    bookId
  );
  return response.data;
};
