import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosGetBook } from "../../API/bookApi";
import { IReqBook, IResponsBook } from "../../lib/typing";

export const getBookThunk = createAsyncThunk<IResponsBook, IReqBook>(
  "book/dBook",
  async ( data : IReqBook): Promise<IResponsBook> => {
    const response = await axiosGetBook(data);
    return response;
  }
);