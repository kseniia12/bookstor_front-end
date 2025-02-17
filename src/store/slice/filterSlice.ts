import { createSlice } from "@reduxjs/toolkit";

import { IResponsFilter } from "../../lib/types/types";
import { getFilterThunk } from "../thunk/thunkBook";

const initialState: IResponsFilter = {
  filter: [
    {
      id: 0,
      name: "",
    },
  ],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFilterThunk.fulfilled, (state, action) => {
      state.filter = action.payload.filter;
    });
  },
});

export default filterSlice.reducer;
