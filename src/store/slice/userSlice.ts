import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { thunkCreateUser, thunkGetUser, thunkLoginUser, thunkUploadPhoto } from "../thunk/thunkUser";
import { IStateUser, IUser, IUseweewer } from "../../lib/typing";
import imgProfile from "../../img/userPhoto.png";
const initialState: IStateUser = {
  user: {
    id: 0,
    fullName: "",
    email: "",
    photo: "../../img/userPhoto.png",
  }
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(thunkCreateUser.fulfilled, (state, action: PayloadAction<{ user: IUser, token: string }>) => {
        state.user = (action.payload.user);
      })
      .addCase(thunkLoginUser.fulfilled, (state, action: PayloadAction<{ user: IUser, token: string }>) => {
        state.user = (action.payload.user);
      })
      .addCase(thunkUploadPhoto.fulfilled, (state, action: PayloadAction<{ photo: string }>) => {
        state.user.photo = action.payload.photo;
      })
      .addCase(thunkGetUser.fulfilled, (state, action) => {
        state.user = (action.payload.user);
      })
  }
});

export default userSlice.reducer;