import { useState } from "react";
import glabIcon from "./assets/glab.svg";
import antEllipse from "./assets/Anthony.png";
import "./App.css";

function Hello({ name }: { name: string }) {
  return (
    <p>
      <code>Hello, {name}!</code>
    </p>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://github.com/AnthonySJHenry" target="_blank">
          <img src={antEllipse} className="logo" alt="Anthony logo" />
        </a>
        <a href="https://gitlab.com/AnthonySJHenry" target="_blank">
          <img src={glabIcon} className="logo" alt="Glab logo" />
        </a>
      </div>
      <h1>AnthonySJHenry</h1>
      <div
        onClick={() => {
          setCount((count) => count * Math.floor(Math.random() * 10) + 1);
          alert("You clicked me! You've multipled your count");
        }}
      >
        <p className="read-the-docs">Click on stuff</p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Hello name="Anthony" />
    </>
  );
}

export default App;
