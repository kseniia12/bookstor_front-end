import { createSlice } from "@reduxjs/toolkit";

import { CommentsState } from "../../lib/typing";
import { addCommentBookThunk, getCommentBookThunk } from "../thunk/thunkBook";

const initialState: CommentsState = {
  comments: []
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(addCommentBookThunk.fulfilled, (state, action) => {
    //   state.comments.push(action.payload)
    // })
    builder.addCase(getCommentBookThunk.fulfilled, (state, action) => {
      state.comments = action.payload
    });
  },
});

export default commentsSlice.reducer;
