import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { tomography } from "@repo/science";
import "./App.css";
import { Button } from "@repo/ui/button";
import RootContainer from "./layouts/RootContainer";

function App() {
  const [count, setCount] = useState(0);
  const m = tomography();

  return (
    <>
      <h1>Chakra layouts test</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <h5> hello from the subtitle</h5>
      <Button appName={"vite"}>
        <p> from tomography we get: {m}</p>
      </Button>
      <RootContainer />
    </>
  );
}

export default App;
