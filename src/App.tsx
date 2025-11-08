import { useState } from "react";
import reactLogo from "./assets/react.svg";
import antEllipse from "./assets/Anthony.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://github.com/AnthonySJHenry" target="_blank">
          <img src={antEllipse} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Anthony + React</h1>
      <div
        onClick={() =>
          setCount((count) => count * 2) > alert("You clicked me!")
        }
      >
        <p className="read-the-docs">Click on me</p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          <code>Hello, World!</code>
        </p>
      </div>
    </>
  );
}

export default App;
