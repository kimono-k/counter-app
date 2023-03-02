import React, { useState, useContext } from "react";
import { ThemeContext } from "./App";

export default function CounterHooks({ initialCount }) {
  // Hooks

  console.log("Render Counter Hooks");
  // Current state, Setter (initial value)
  const [count, setCount] = useState(initialCount);

  // Using the context
  const style = useContext(ThemeContext);

  return (
    <div>
      <button
        style={style}
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        -
      </button>
      <span>{count}</span>
      <button
        style={style}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
    </div>
  );
}
