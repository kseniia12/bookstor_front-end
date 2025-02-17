import constant from "../lib/constants/constants";
import {
  IRateBook,
  IReqBook,
  IResponsBookPagination,
  IResponsFilter,
  IResponsRecommendations,
  IStateUser,
} from "../lib/types/types";
import { axiosDefault } from "./axiosDefault";

export const axiosGetBook = async (
  data: IReqBook
): Promise<IResponsBookPagination> => {
  const response = await axiosDefault.get<IResponsBookPagination>(
    constant.GET_BOOK,
    { params: data }
  );
  return response.data;
};

export const axiosGetFilter = async (): Promise<IResponsFilter> => {
  const response = await axiosDefault.get<IResponsFilter>(constant.FILTER);
  return response.data;
};

export const axiosGetReccomendationsBook = async (data: {
  bookId: number;
}): Promise<IResponsRecommendations> => {
  const response = await axiosDefault.get<IResponsRecommendations>(
    constant.RECOMMENDATIONS,
    { params: data }
  );
  return response.data;
};

export const axiosRateBook = async (data: IRateBook): Promise<IStateUser> => {
  const response = await axiosDefault.patch<IStateUser>(
    constant.RATE_BOOK,
    data
  );
  return response.data;
};
