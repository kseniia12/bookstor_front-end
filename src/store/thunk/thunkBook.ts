import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosGetBook, axiosGetFilter } from "../../API/bookApi";
import { IReqBook, IResponsBook, IResponsFilter } from "../../lib/typing";

export const getBookThunk = createAsyncThunk<IResponsBook, IReqBook>(
  "book/dBook",
  async ( data : IReqBook): Promise<IResponsBook> => {
    const response = await axiosGetBook(data);
    return response;
  }
);

export const getFilterThunk = createAsyncThunk<IResponsFilter>(
  "filter/dBook",
  async (): Promise<IResponsFilter> => {
    const response = await axiosGetFilter();
    return response;
  }
);