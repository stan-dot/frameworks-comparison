import "./App.css";
import { Box, ChakraProvider, HStack, useMediaQuery } from "@chakra-ui/react";
import SubmitButton from "@repo/ui/submit-button";
import { useState } from "react";
import Form from "./components/Form";
import GeneratedTable from "./components/GeneratedTable";
import Selector from "./components/Selector";
import {
  GeneratorSetup,
  ReadyRow,
  defaultGeneratorSetup,
  generateRows,
} from "./utils/sampleHolderSize";
import { PeriodicTable } from "@diamondlightsource/periodic-table/table";
import { NewTable } from "./editable-table/NewTable";
import { NewSamplesTable } from "./editable-table/NewSamplesTable";

function App() {
  const [form, setForm] = useState<GeneratorSetup>(defaultGeneratorSetup);

  const [ready, setReady] = useState<boolean>(false);

  const handler = (newGeneratorValue: Partial<GeneratorSetup>) => {
    setForm((prev) => {
      return { ...prev, ...newGeneratorValue };
    });
  };

  const rows: ReadyRow[] = generateRows(form);
  console.log("new rows sample name: ", rows[0].sampleName);

  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  console.log('rows: ', rows);

  return <NewTable />;
  return <ChakraProvider>
    <NewSamplesTable />
  </ChakraProvider>
  // todo add verification if it's ready or going with the default values
  if (isLargerThan1280) {
    return (
      <HStack>
        {/* <CustomControlsExample /> */}
        <Box>
          {/* <Selector propRows={rows} /> */}
          <ChakraProvider>
            <br />
            <GeneratedTable data={rows} />
            <PeriodicTable callback={(e) => { window.alert(`clicked element: ${e.Name}`) }} />
          </ChakraProvider>
        </Box>
        <Box>
          <Form value={form} handler={handler} />
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
          {/* todo this button would also reset and does not really submit, might need to change the name */}
          <SubmitButton callback={() => setReady(true)} />
        </>
      )}
    </>
  );
}

export default App;
