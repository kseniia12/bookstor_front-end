import constant from "../constants/constants";
import { IAddBookToCart, IBook, IDeleteBookToCart, IGenRecommendations, IGetBookToCart, IRateBook, IReqBook, IReqDeleteBookToCart, IResponsBook, IResponsFilter, IResponsRecommendations } from "../lib/typing";
import { axiosDefault } from "./axiosDefault";

export const axiosGetBook = async (data: IReqBook): Promise<IResponsBook> => {
  const response = await axiosDefault.get<IResponsBook>(constant.GET_BOOK, {params: data});
  return response.data;
};

export const axiosGetFilter = async (): Promise<IResponsFilter> => {
  const response = await axiosDefault.get<IResponsFilter>(constant.GET_FILTER);
  return response.data;
};

export const axiosAddBookToCart = async (bookId: IAddBookToCart): Promise<IGetBookToCart> => {
  const response = await axiosDefault.post<IGetBookToCart>(constant.GET_CART, 
    bookId
  );
  return response.data;
};

export const axiosAddBookToFavorites = async (bookId: IAddBookToCart): Promise<IResponsRecommendations> => {
  const response = await axiosDefault.post<IResponsRecommendations>(constant.ADD_FAVORITES, 
    bookId
  );
  return response.data;
};

export const axiosGetBookToCart = async (): Promise<IGetBookToCart> => {
  const response = await axiosDefault.get<IGetBookToCart>(constant.GET_CART);
  return response.data;
};

export const axiosDeleteBookFromCart = async (bookId: IReqDeleteBookToCart): Promise<IDeleteBookToCart> => {
  const response = await axiosDefault.delete<IDeleteBookToCart>(constant.DELETE_BOOK_FROM_CART, {data: bookId});
  return response.data;
};

export const axiosChangeCountBooks = async (bookId: IAddBookToCart): Promise<IResponsFilter> => {
  const response = await axiosDefault.patch<IResponsFilter>(constant.DELETE_BOOK_FROM_CART, 
    bookId
  );
  return response.data;
};

export const axiosGetReccomendationsBook = async (data: IGenRecommendations): Promise<IResponsRecommendations> => {
  const response = await axiosDefault.get<IResponsRecommendations>(constant.GET_RECOMMENDATIONS, {params: data});
  return response.data;
};

export const axiosRateBook = async (data: IRateBook): Promise<IRateBook> => {
  console.log(data)
  const response = await axiosDefault.patch<IRateBook>(constant.RATE_BOOK, data);
  return response.data;
};

export const axiosGetBookToFavorites = async (): Promise<IResponsRecommendations> => {
  const response = await axiosDefault.get<IResponsRecommendations>(constant.ADD_FAVORITES);
  return response.data;
};