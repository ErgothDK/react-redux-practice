import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const counterButtonHandler = (event) => {
    dispatch({ type: event.target.name });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={counterButtonHandler} name="decrement">
          -
        </button>
        <button onClick={counterButtonHandler} name="increment">
          +
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
