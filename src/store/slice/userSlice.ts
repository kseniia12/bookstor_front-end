import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: 0,
    fullName: "",
    email: "",
    dob: ""
  }
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;