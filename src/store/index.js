import { configureStore } from "@reduxjs/toolkit";
import coffee from "../reducers/coffeeSlice";
import filters from "../reducers/coffeeFiltersSlice";
import coffeeItem from "../reducers/coffeeItemSlice";

const store = configureStore({
  reducer: { coffee, filters, coffeeItem },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
