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
import { Box, ChakraProvider, HStack, useMediaQuery } from "@chakra-ui/react";
import GeneratedTable from "./components/GeneratedTable";

function App() {
  const [form, setForm] = useState<GeneratorSetup>(defaultGeneratorSetup);

  const [ready, setReady] = useState<boolean>(false);

  const handler = (newGeneratorValue: Partial<GeneratorSetup>) => {
    setForm((prev) => {
      return { ...prev, ...newGeneratorValue };
    });
  };

  const rows: ReadyRow[] = generateRows(form);

  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  // todo add verification if it's ready or going with the default values
  if (isLargerThan1280) {
    return (
      <HStack>
        <Box>
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
        </Box>
        <Box>
          <Form value={form} handler={handler} />
          {/* todo this button would also reset and does not really submit, might need to change the name */}
          <SubmitButton callback={() => setReady(true)} />
        </Box>
      </HStack>
    );
  }

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
