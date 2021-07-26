import { connect } from "react-redux";
import { increment, decrement } from "./actions";

const Counter = (props) => {
  // console.log(props);
  return (
    <div>
      <button onClick={props.increment} className="increment">
        Increment
      </button>
      <button onClick={props.decrement} className="decrement">
        Decrement
      </button>
      Current Count: <span>{props.count}</span>
    </div>
  );
};

// Only change code *before* me!
// -----------

const getState = (state) => {
  // console.log(state)
  return {
    count: state.count
  };
};

export default connect(getState, {
  increment: increment,
  decrement: decrement
})(Counter);
