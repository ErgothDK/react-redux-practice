import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const counterButtonHandler = (event) => {
    dispatch({ type: event.target.name });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={counterButtonHandler} name="decrement">
          -
        </button>
        <button onClick={counterButtonHandler} name="increment">
          +
        </button>
      </div>
      <button onClick={counterButtonHandler} name="toggle">
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;
