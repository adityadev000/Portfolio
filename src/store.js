import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './components/reusable/themeSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});