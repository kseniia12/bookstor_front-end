import { createSlice } from "@reduxjs/toolkit";

import { getRecommendationsBookThunk } from "../thunk/thunkBook";
import { IResponsRecommendations } from "../../lib/typing";

const initialState: IResponsRecommendations = {
  book: {
    key: {
      id: "",
      name: "",
      priceSoft: 0,
      priceHard: 0,
      description: "",
      cover: "",
      countHard: 0,
      countSoft: 0,
      bestseller: false,
      averageRating: 0,
      author: {
        id: 0,
        name: ""
      },
    },
  },
};

const recommendationsSlice = createSlice({
  name: "recommendations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecommendationsBookThunk.fulfilled, (state, action) => {
      if (Array.isArray(action.payload.book)) {
        const booksObject = action.payload.book.reduce((acc, book) => {
          acc[book.id] = book; 
          return acc;
        }, {});
        state.book = booksObject; 

      } else {
        console.error("Это не массив");
      }
    });
  },
  },
);

export default recommendationsSlice.reducer;
