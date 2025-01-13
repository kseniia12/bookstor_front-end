import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { thunkCreateUser, thunkLoginUser } from "../thunk/thunkUser";
import { IStateUser, IUser } from "../../lib/typing";
const initialState: IStateUser = {
  user: {
    id: 0,
    fullName: "",
    email: "",
  }
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(thunkCreateUser.fulfilled, (state, action: PayloadAction<{ user: IUser, token: string }>) => {
        console.log(action.payload.user)
        state.user = (action.payload.user);
      })
      .addCase(thunkLoginUser.fulfilled, (state, action: PayloadAction<{ user: IUser, token: string }>) => {
        state.user = (action.payload.user);
      })
  }
});

export default userSlice.reducer;