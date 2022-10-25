import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";

const coffeeFiltersAdapter = createEntityAdapter();

export const fetchFilters = createAsyncThunk("filters/fetchFilters", () => {
  const { request } = useHttp();
  return request("http://localhost:3001/filters");
});

const coffeeFiltersSlice = createSlice({
  name: "filters",
  initialState: coffeeFiltersAdapter.getInitialState({
    activeFilter: "all",
    searchInput: "",
    filtersLoadingStatus: "idle",
  }),
  reducers: {
    activeFilterChange: (state, action) => {
      state.activeFilter = action.payload;
    },
    searchInputChange: (state, action) => {
      state.searchInput = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilters.pending, (state) => {
        state.filtersLoadingStatus = "loading";
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.filtersLoadingStatus = "idle";
        coffeeFiltersAdapter.setAll(state, action.payload);
      })
      .addCase(fetchFilters.rejected, (state) => {
        state.filtersLoadingStatus = "error";
      });
  },
});

export const { selectAll } = coffeeFiltersAdapter.getSelectors(
  (state) => state.filters
);

const { reducer, actions } = coffeeFiltersSlice;

export const { activeFilterChange, searchInputChange } = actions;
export default reducer;
