import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createUserThunk,
  getUserThunk,
  loginUserThunk,
  patchUserThunk,
  uploadPhotoThunk,
} from "./thunkUser";
import { IRateBook, IStateUser, IUser } from "../../lib/types/types";
import { rateBookThunk } from "../book/thunkBook";

const initialState: IStateUser = {
  user: null,
  ratingBook: {},
};

interface IRating {
  [key: string]: IRateBook;
}

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(uploadPhotoThunk.fulfilled, (state, action) => {
        if (state.user !== null) state.user.photo = action.payload.photo;
      })
      .addCase(getUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        const booksObject = action.payload.ratingBook.reduce((acc, book) => {
          acc[book.bookId] = book;
          return acc;
        }, {} as IRating);
        state.ratingBook = booksObject;
      })
      .addCase(getUserThunk.rejected, (state, action) => {
        state.user = null;
      })
      .addCase(
        patchUserThunk.fulfilled,
        (state, action: PayloadAction<{ user: IUser }>) => {
          state.user = action.payload.user;
        }
      )
      .addCase(rateBookThunk.fulfilled, (state, action) => {
        const booksObject = action.payload.ratingBook.reduce((acc, book) => {
          acc[book.bookId] = book;
          return acc;
        }, {} as IRating);
        state.ratingBook = booksObject;
      });
  },
});

export default userSlice.reducer;
