import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { input, equal, clear } from "./store/actions";
import "./style.css";

const Calculator = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.input);
  const result = useSelector((state) => state.result);

  const handleClick = (e) => {
    dispatch(input(e.target.value));
  };

  const handleEqual = () => {
    dispatch(equal());
  };

  const handleClear = () => {
    dispatch(clear());
  };

  return (
    <div className="calculator-container">
      <div className="display-container">
        <input
          type="text"
          value={inputValue || result}
          disabled
          className="display"
        />
      </div>
      <div className="button-container">
        <button className="button" onClick={handleClick} value={1}>
          1
        </button>
        <button className="button" onClick={handleClick} value={2}>
          2
        </button>
        <button className="button" onClick={handleClick} value={3}>
          3
        </button>
        <button className="button operator" onClick={handleClick} value={"+"}>
          +
        </button>
        <button className="button" onClick={handleClick} value={4}>
          4
        </button>
        <button className="button" onClick={handleClick} value={5}>
          5
        </button>
        <button className="button" onClick={handleClick} value={6}>
          6
        </button>
        <button className="button operator" onClick={handleClick} value={"-"}>
          -
        </button>
        <button className="button" onClick={handleClick} value={7}>
          7
        </button>
        <button className="button" onClick={handleClick} value={8}>
          8
        </button>
        <button className="button" onClick={handleClick} value={9}>
          9
        </button>
        <button className="button operator" onClick={handleClick} value={"*"}>
          x
        </button>
        <button className="button" onClick={handleClick} value={"."}>
          .
        </button>
        <button className="button" onClick={handleClick} value={0}>
          0
        </button>
        <button className="button operator" onClick={handleEqual}>
          =
        </button>
        <button className="button operator" onClick={handleClick} value={"/"}>
          /
        </button>
        <button className="button" onClick={handleClear}>
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
