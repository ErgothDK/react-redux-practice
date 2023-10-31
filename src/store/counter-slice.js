import { createSlice } from "@reduxjs/toolkit";

const initialCounterValue = {
  value: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterValue,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
