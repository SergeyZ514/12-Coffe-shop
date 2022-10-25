import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

const coffeeItemAdapter = createEntityAdapter();

export const fetchCoffeeItem = createAsyncThunk(
  "coffeeItem/fetchCoffeeItem",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `https://coffee-shop-23456546.herokuapp.com/api/coffee/${id}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw response.status;
      }

      const data = await response.json();
      dispatch(addItem(data));
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const coffeeItemSlice = createSlice({
  name: "coffeeItem",
  initialState: coffeeItemAdapter.getInitialState({
    status: "idle",
    error: null,
  }),
  reducers: {
    addItem(state, action) {
      coffeeItemAdapter.setOne(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoffeeItem.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCoffeeItem.fulfilled, (state) => {
        state.status = "idle";
        state.error = null;
      })
      .addCase(fetchCoffeeItem.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });
  },
});

const { addItem } = coffeeItemSlice.actions;

const { reducer } = coffeeItemSlice;

export const { selectEntities } = coffeeItemAdapter.getSelectors(
  (state) => state.coffeeItem
);

export default reducer;
