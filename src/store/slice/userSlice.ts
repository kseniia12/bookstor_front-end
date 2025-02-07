import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createUserThunk,
  getUserThunk,
  loginUserThunk,
  patchUserThunk,
  uploadPhotoThunk,
} from "../thunk/thunkUser";
import { IStateUser, IUser } from "../../lib/typing";
import { rateBookThunk } from "../thunk/thunkBook";

const initialState: IStateUser = {
  user: {
    id: 0,
    fullName: "",
    email: "",
    photo: "../../assets/userProfile.png",
  },
  ratingBook: {
    bookId: 0,
    rate: 0
  }
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
          state.user.photo = action.payload.photo;
        }
      )
      .addCase(getUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(getUserThunk.rejected, (state, action) => {
        state.user = {
          id: 0,
          fullName: "",
          email: "",
          photo: "../../assets/userProfile.png",
        };
      })
      .addCase(
        patchUserThunk.fulfilled,
        (state, action: PayloadAction<{ user: IUser }>) => {
          state.user = action.payload.user;
        }
      )
      .addCase(
        rateBookThunk.fulfilled,
        (state, action) => {
          state.ratingBook = action.payload;
        }
      );
      
  },
});

export default userSlice.reducer;
