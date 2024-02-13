import { Button } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { ReadyRow, downloadRowsAsCsv } from "../utils/sampleHolderSize";
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
  sampleName: "",
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
    name: "",
    monoisotopicMass: undefined,
  },
  edge: "K",
  detectionMode: "T",
  sampleName: "Og",
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

      <Button onClick={() =>downloadRowsAsCsv(data)}>Download the table</Button>
    </div>
  );
}

export default GeneratedTable;
