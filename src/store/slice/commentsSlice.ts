import { createSlice } from "@reduxjs/toolkit";

import { IComment } from "../../lib/types/types";
import {
  addCommentBookThunk,
  getCommentBookThunk,
} from "../thunk/thunkComment";

const initialState: {
  comments: IComment[];
} = {
  comments: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addCommentBookThunk.fulfilled, (state, action) => {
      state.comments.push(action.payload);
    });
    builder.addCase(getCommentBookThunk.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
  },
});

export default commentsSlice.reducer;
