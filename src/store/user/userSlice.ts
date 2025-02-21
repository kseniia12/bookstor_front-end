import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createUserThunk,
  getUserThunk,
  loginUserThunk,
  patchUserThunk,
  uploadPhotoThunk,
} from "./thunkUser";
import { IStateUser, IUser } from "../../lib/types/types";
import { rateBookThunk } from "../book/thunkBook";

const initialState: IStateUser = {
  user: null,
  ratingBook: {},
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        createUserThunk.fulfilled,
        (state, action: PayloadAction<{ user: IUser; token: string }>) => {
          state.user = action.payload.user;
        }
      )
      .addCase(
        loginUserThunk.fulfilled,
        (state, action: PayloadAction<{ user: IUser; token: string }>) => {
          state.user = action.payload.user;
        }
      )
      .addCase(
        uploadPhotoThunk.fulfilled,
        (state, action: PayloadAction<{ photo: string }>) => {
          if (state.user !== null)
          state.user.photo = action.payload.photo;
        }
      )
      .addCase(getUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        if (Array.isArray(action.payload.ratingBook)) {
          const booksObject = action.payload.ratingBook.reduce((acc, book) => {
            acc[book.bookId] = book;
            return acc;
          }, {});
          state.ratingBook = booksObject;
        }
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
        if (Array.isArray(action.payload.ratingBook)) {
          const booksObject = action.payload.ratingBook.reduce((acc, book) => {
            acc[book.bookId] = book;
            return acc;
          }, {});
          state.ratingBook = booksObject;
        }
      });
  },
});

export default userSlice.reducer;
