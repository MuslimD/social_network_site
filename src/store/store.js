import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import postsSlice from "../features/postsSlice";

export const store = configureStore({
  reducer: {
    userSlice,
    postsSlice,
  },
});
