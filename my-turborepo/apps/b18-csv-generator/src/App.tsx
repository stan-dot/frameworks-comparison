import { ChakraProvider, HStack, useMediaQuery } from "@chakra-ui/react";
import SubmitButton from "@repo/ui/submit-button";
import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { NewSamplesTable } from "./editable-table/NewSamplesTable";
import {
  GeneratorSetup,
  ReadyRow,
  defaultGeneratorSetup,
  generateRows,
} from "./utils/sampleHolderSize";

function App() {
  const [form, setForm] = useState<GeneratorSetup>(defaultGeneratorSetup);

  const [ready, setReady] = useState<boolean>(false);

  const handler = (newGeneratorValue: Partial<GeneratorSetup>) => {
    setForm((prev) => {
      return { ...prev, ...newGeneratorValue };
    });
  };

  // derivative state
  const rows: ReadyRow[] = generateRows(form);
  console.log("new rows sample name: ", rows[0].sampleName);

  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  console.log("rows: ", rows);

  if (isLargerThan1280) {
    return (
      <ChakraProvider>
        <Form value={form} handler={handler} />
        <HStack>
          <NewSamplesTable data={rows} />
        </HStack>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider>
      {ready ? (
        <>
          <NewSamplesTable data={rows} />
        </>
      ) : (
        <>
          <Form value={form} handler={handler} />
          {/* todo this button would also reset and does not really submit, might need to change the name */}
          <SubmitButton callback={() => setReady(true)} />
        </>
      )}
    </ChakraProvider>
  );
}

export default App;
