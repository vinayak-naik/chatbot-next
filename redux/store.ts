import { configureStore } from "@reduxjs/toolkit";
import { blogsApi } from "./api-query/blogsApi";
import counterReducer from "./redux-toolkit/counterSlice";
import adminReducer from "./redux-toolkit/adminSlice";
import userReducer from "./redux-toolkit/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    admin: adminReducer,
    user: userReducer,
    [blogsApi.reducerPath]: blogsApi.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
