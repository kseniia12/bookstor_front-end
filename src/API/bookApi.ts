import constant from "../constants/constants";
import { IAddBookToCart, IGetBookToCart, IReqBook, IResponsBook, IResponsFilter } from "../lib/typing";
import { axiosDefault } from "./axiosDefault";

export const axiosGetBook = async (data: IReqBook): Promise<IResponsBook> => {
  const response = await axiosDefault.get<IResponsBook>(constant.GET_BOOK, {params: data});
  return response.data;
};

export const axiosGetFilter = async (): Promise<IResponsFilter> => {
  const response = await axiosDefault.get<IResponsFilter>(constant.GET_FILTER);
  return response.data;
};

export const axiosAddBookToCart = async (bookId: IAddBookToCart): Promise<IResponsFilter> => {
  const response = await axiosDefault.post<IResponsFilter>(constant.GET_CART, 
    bookId
  );
  return response.data;
};

export const axiosGetBookToCart = async (): Promise<IGetBookToCart> => {
  const response = await axiosDefault.get<IGetBookToCart>(constant.GET_CART);
  return response.data;
};