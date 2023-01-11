import { createSlice } from "@reduxjs/toolkit";

const controlsSlice = createSlice({
  name: 'controls',
  initialState: {
    currentFilter: 'Все',
    currentSort: 'popular',
  },
  reducers: {
    changeFilter(state, action) {
      state.currentFilter = action.payload;
    },
    changeSort(state, action) {
      state.currentSort = action.payload;
    }
  }
});

export const { changeFilter, changeSort } = controlsSlice.actions;

export default controlsSlice.reducer;