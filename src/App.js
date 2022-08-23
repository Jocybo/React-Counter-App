import "./App.css";
import React, { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <div className="container">
        <h1>{counter}</h1>
        <div className="buttons">
          <button className="counters" onClick={() => setCounter(counter - 1)}>
            -
          </button>
          <button className="counters" onClick={() => setCounter(counter + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
