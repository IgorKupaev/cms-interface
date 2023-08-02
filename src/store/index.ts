import { configureStore } from "@reduxjs/toolkit";

import templateSlice from "./features/template/slice";

export const store = configureStore({
  reducer: {
    template: templateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
