import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "@/lib/store/userApi";
import userSlice from "@/lib/store/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
  devTools: process.env.NODE_ENV !== "production" && {
    name: "Bitcoin Dashboard Store",
    trace: true,
    traceLimit: 25,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
