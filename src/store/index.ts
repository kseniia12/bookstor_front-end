import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import bookSlice from "./slice/bookSlice";
import filterSlice from "./slice/filterSlice";
import cartSlice from "./slice/cartSlice";
import recommendationsSlice from "./slice/recommendationsSlice";
import favoritesSlice from "./slice/favoritesSlice";
import commentsSlice from "./slice/commentsSlice";


const store = configureStore({
  reducer: {
    users: userSlice,
    book: bookSlice,
    filter: filterSlice,
    cart: cartSlice,
    recommendation: recommendationsSlice,
    favorites: favoritesSlice,
    comments: commentsSlice
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;