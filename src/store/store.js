import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import postsSlice from "../features/postsSlice";
import messageSlice from "../features/messageSlice";
import followersSlice from "../features/followersSlice";
import followsSlice from "../features/followsSlice";
export const store = configureStore({
  reducer: {
    userSlice,
    postsSlice,
    messageSlice,
    followersSlice,
    followsSlice,
  },
});
