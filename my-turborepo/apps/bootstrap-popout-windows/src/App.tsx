import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { tomography } from "@repo/science";
import "./App.css";
import { Button } from "@repo/ui/button";
import { Router, RouterProvider } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/router-devtools";

function App() {
  const [count, setCount] = useState(0);
  const m = tomography();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <h5> hello from the subtitle</h5>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button appName={"vite"}>
        <p>nothing, but from tomography we get: {m}</p>
      </Button>
      <RouterProvider router={router} />
      <TanStackRouterDevtoolsPanel
        router={router}
        style={styles}
        className={className}
      />
    </>
  );
}

export default App;
