import constant from "../lib/constants/constants";
import { IAddBookToCart, IResponsRecommendations } from "../lib/types/types";
import { axiosDefault } from "./axiosDefault";

export const axiosAddBookToFavorites = async (
  bookId: IAddBookToCart
): Promise<IResponsRecommendations> => {
  const response = await axiosDefault.post<IResponsRecommendations>(
    constant.FAVORITES,
    bookId
  );
  return response.data;
};

export const axiosGetBookToFavorites =
  async (): Promise<IResponsRecommendations> => {
    const response = await axiosDefault.get<IResponsRecommendations>(
      constant.FAVORITES
    );
    return response.data;
  };
