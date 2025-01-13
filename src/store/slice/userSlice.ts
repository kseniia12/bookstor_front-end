import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { thunkCreateUser } from "../thunk/thunkUser";
import { IStateUser, IUser } from "../../typing";
const initialState:IStateUser  = {
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
  }
});

export default userSlice.reducer;