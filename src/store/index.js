import { createStore } from "redux";

const initialValue = {
  counter: 0,
  showCounter: true,
};

function counterReducer(state = initialValue, action) {
  if (action.type.toUpperCase() === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type.toUpperCase() === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  if (action.type.toUpperCase() === "TOGGLE") {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }

  return state;
}

const store = createStore(counterReducer);

export default store;
