import { useState, useReducer } from "react";

function DateCounter() {
  // const [count, setCount] = useState(0);
  const [step, setStep] = useReducer((state, action) => {
    switch (action.type) {
      case "set":
        return action.payload;
    }
  }, 1);

  const [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "inc":
        return state + step;
      case "dec":
        return state - step;
      case "set":
        return action.payload;
      default:
        return state;
    }
  }, 0);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  //date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    dispatch({ type: "set", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    setStep({ type: "set", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "set", payload: 1 });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
