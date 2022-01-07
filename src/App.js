import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <div className="button-container">
        <button onClick={() => setCount(count - 1)}>-</button>
        <h1
          className={count > 100 ? "positive" : count < 5 ? "negative" : null}
        >
          {count}
        </h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default App;
