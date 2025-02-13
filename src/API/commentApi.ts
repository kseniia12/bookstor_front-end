import constant from "../lib/constants/constants";
import { IComment, IPropsComment } from "../lib/types/types";
import { axiosDefault } from "./axiosDefault";

export const axiosAddCommentBook = async (
  data: IPropsComment
): Promise<IComment> => {
  const response = await axiosDefault.post<IComment>(
    constant.COMMENT,
    data
  );
  return response.data;
};

export const axiosGetComment = async (data: {
  bookId: number;
}): Promise<IComment[]> => {
  const response = await axiosDefault.get<IComment[]>(constant.COMMENT, {
    params: data,
  });
  return response.data;
};