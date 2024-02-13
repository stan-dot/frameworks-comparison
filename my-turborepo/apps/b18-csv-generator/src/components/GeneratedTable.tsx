import { Button } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import {
  ReadyRow,
  downloadFile,
  downloadRowsAsCsv,
  getCsvContent,
} from "../utils/sampleHolderSize";
import { DataTable } from "./DataTable";

const r1: ReadyRow = {
  element: {
    number: 0,
    isotopes: [],
    symbol: "",
    mass: null,
    name: "He",
    monoisotopicMass: undefined,
  },
  edge: "K",
  detectionMode: "T",
  sampleName: "Helium test",
  sampleComment: "",
  column: "",
  row: 0,
  repetitions: 0,
};

const r2: ReadyRow = {
  element: {
    number: 0,
    isotopes: [],
    symbol: "",
    mass: null,
    name: "Og",
    monoisotopicMass: undefined,
  },
  edge: "K",
  detectionMode: "T",
  sampleName: "Oganesson test",
  sampleComment: "",
  column: "",
  row: 0,
  repetitions: 0,
};

const data: ReadyRow[] = [r1, r2];

const columnHelper = createColumnHelper<ReadyRow>();

const columns = [
  columnHelper.accessor("element.name", {
    cell: (info) => info.getValue(),
    header: "Element",
  }),
  columnHelper.accessor("edge", {
    cell: (info) => info.getValue(),
    header: "Edge",
  }),
  columnHelper.accessor("detectionMode", {
    cell: (info) => info.getValue(),
    header: "detectionMode",
    meta: {
      isNumeric: false,
    },
  }),
];

function GeneratedTable() {
  return (
    <div>
      <h3>GeneratedTable is here</h3>
      <DataTable data={data} columns={columns} />

      <Button
        onClick={() => {
          const s = getCsvContent(data);
          downloadFile({data:s, filename: 'b18-data.csv', fileType:'text/csv'})
        }}
      >
        Download the table
      </Button>
    </div>
  );
}

export default GeneratedTable;
