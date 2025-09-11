import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>veve</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="bg-amber-100">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
        blanditiis itaque architecto recusandae vero reprehenderit soluta nihil
        quia officia tempore accusantium laboriosam odio odit exercitationem
        fugiat, qui ab est expedita. Iusto assumenda tenetur nemo voluptatem
        labore magnam obcaecati minima natus doloremque, ipsam repellendus
        excepturi maiores mollitia facilis illo vitae voluptas ab. Nisi est
        obcaecati facere aliquid beatae incidunt culpa soluta iure at excepturi
        debitis ratione veniam nemo, nulla dicta facilis! Illum excepturi minima
        perspiciatis eius accusamus iste non, ducimus ipsam voluptatum, tempore
        ullam alias. Reiciendis iure quae quibusdam ad vitae?
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
