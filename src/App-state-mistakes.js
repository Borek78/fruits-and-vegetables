import "./usestate.css";
import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber(number + 1);
  }
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <h1>{number}</h1>
    </div>
  );
}

export default App;
