import { createStore } from "redux";

function counterReducer(state = { counter: 0 }, action) {
  if (action.type.toUpperCase() === "INCREMENT") {
    return { counter: state.counter + 1 };
  }

  if (action.type.toUpperCase() === "DECREMENT") {
    return { counter: state.counter - 1 };
  }

  return state;
}

const store = createStore(counterReducer);

export default store;
