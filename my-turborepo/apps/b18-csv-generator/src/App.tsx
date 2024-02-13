import SubmitButton from "@repo/ui/submit-button";
import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Selector from "./components/Selector";
import {
  GeneratorSetup,
  ReadyRow,
  defaultGeneratorSetup,
  generateRows,
} from "./utils/sampleHolderSize";
import { ChakraProvider } from "@chakra-ui/react";
import GeneratedTable from "./components/GeneratedTable";

function App() {
  const [form, setForm] = useState<GeneratorSetup>(defaultGeneratorSetup);

  const [ready, setReady] = useState<boolean>(false);

  const handler = (g: Partial<GeneratorSetup>) => {
    setForm((prev) => {
      return { ...prev, ...g };
    });
  };

  const rows: ReadyRow[] = generateRows(form);

  // todo add verification if it's ready or going with the default values
  return (
    <>
      {ready ? (
        <>
          <Selector propRows={rows} />
          <ChakraProvider>
            <button
              style={{ backgroundColor: "green", padding: 2, margin: 2 }}
              onClick={() => setReady(false)}
            >
              Go back
            </button>

            <br />
            <GeneratedTable />
          </ChakraProvider>
        </>
      ) : (
        <>
          <Form value={form} handler={handler} />
          <SubmitButton callback={() => setReady(true)} />
        </>
      )}
    </>
  );
}

export default App;
