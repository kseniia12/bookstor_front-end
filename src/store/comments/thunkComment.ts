import { createAsyncThunk } from "@reduxjs/toolkit";
import { IComment, IPropsComment } from "../../lib/types/types";
import { axiosAddCommentBook, axiosGetComment } from "../../API/commentApi";

export const addCommentBookThunk = createAsyncThunk<IComment, IPropsComment>(
  "comments/addCommentBook",
  async (data: IPropsComment): Promise<IComment> => {
    const response = await axiosAddCommentBook(data);
    return response;
  }
);

export const getCommentBookThunk = createAsyncThunk<
  IComment[],
  { bookId: number }
>(
  "getComment/dBook",
  async (bookId: { bookId: number }): Promise<IComment[]> => {
    const response = await axiosGetComment(bookId);
    return response;
  }
);
