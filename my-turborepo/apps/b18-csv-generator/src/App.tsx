import SubmitButton from '@repo/ui/submit-button';
import './App.css';
import Form from './components/Form';
import { GeneratorSetup, ReadyRow, defaultGeneratorSetup, generateRows } from './utils/sampleHolderSize';
import { useState } from 'react';
import Selector from './components/Selector';

import { ChakraProvider } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from './components/DataTable';

type UnitConversion = {
  fromUnit: string;
  toUnit: string;
  factor: number;
};

const data: UnitConversion[] = [
  {
    fromUnit: "inches",
    toUnit: "millimetres (mm)",
    factor: 25.4
  },
  {
    fromUnit: "feet",
    toUnit: "centimetres (cm)",
    factor: 30.48
  },
  {
    fromUnit: "yards",
    toUnit: "metres (m)",
    factor: 0.91444
  }
];

const columnHelper = createColumnHelper<UnitConversion>();

const columns = [
  columnHelper.accessor("fromUnit", {
    cell: (info) => info.getValue(),
    header: "To convert"
  }),
  columnHelper.accessor("toUnit", {
    cell: (info) => info.getValue(),
    header: "Into"
  }),
  columnHelper.accessor("factor", {
    cell: (info) => info.getValue(),
    header: "Multiply by",
    meta: {
      isNumeric: true
    }
  })
];



function App() {
  const [form, setForm] = useState<GeneratorSetup>(defaultGeneratorSetup);

  const [ready, setReady] = useState<boolean>(false);


  const handler = (g: Partial<GeneratorSetup>) => {
    setForm(prev => { return { ...prev, ...g } })
  }

  const rows: ReadyRow[] = generateRows(form);


  // todo add back button
  // todo add verification if it's ready or going with the default values
  return (
    <>
      {ready ? <Selector propRows={rows} />
        :

        <Form value={form} handler={handler} />
      }
      <SubmitButton callback={() => setReady(true)} />
    <ChakraProvider>
      <DataTable columns={columns} data={data} />
    </ChakraProvider>
    </>
  )
}

export default App
