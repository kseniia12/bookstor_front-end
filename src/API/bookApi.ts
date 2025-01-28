import constant from "../constants/constants";
import { IReqBook, IResponsBook, IResponsFilter } from "../lib/typing";
import { axiosDefault } from "./axiosDefault";

export const axiosGetBook = async (data: IReqBook): Promise<IResponsBook> => {
  const response = await axiosDefault.get<IResponsBook>(constant.GET_BOOK, {params: data});
  return response.data;
};

export const axiosGetFilter = async (): Promise<IResponsFilter> => {
  const response = await axiosDefault.get<IResponsFilter>(constant.GET_FILTER);
  return response.data;
};