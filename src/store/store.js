import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import postsSlice from "../features/postsSlice";
import messageSlice from "../features/messageSlice";

export const store = configureStore({
  reducer: {
    userSlice,
    postsSlice,
    messageSlice,
  },
});
