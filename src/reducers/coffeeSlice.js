import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";
import { searchEmp } from "../utils/searchEmp";

const coffeeAdapter = createEntityAdapter();

export const fetchCoffee = createAsyncThunk("coffee/fetchCoffee", () => {
  const { request } = useHttp();
  return request("https://coffee-shop-23456546.herokuapp.com/api/coffee");
});

const coffeeSlice = createSlice({
  name: "coffee",
  initialState: coffeeAdapter.getInitialState({
    coffeeLoadingStatus: "idle",
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoffee.pending, (state) => {
        state.coffeeLoadingStatus = "loading";
      })
      .addCase(fetchCoffee.fulfilled, (state, action) => {
        state.coffeeLoadingStatus = "idle";
        coffeeAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCoffee.rejected, (state) => {
        state.coffeeLoadingStatus = "error";
      });
  },
});

export const { selectAll } = coffeeAdapter.getSelectors(
  (state) => state.coffee
);

export const filteredCoffeeItems = createSelector(
  (state) => state.filters.activeFilter,
  (state) => state.filters.searchInput,
  selectAll,
  (activeFilter, searchInput, coffeeItems) => {
    let items;

    if (activeFilter === "all") {
      items = coffeeItems;
    } else {
      items = coffeeItems.filter((item) => item.origin === activeFilter);
    }
    return searchEmp(items, searchInput);
  }
);

const { reducer } = coffeeSlice;

export default reducer;
