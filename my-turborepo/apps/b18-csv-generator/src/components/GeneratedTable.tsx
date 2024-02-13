import { Button } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { ReadyRow, getCsvContent } from "../utils/sampleHolderSize";
import { downloadFile } from "@repo/utils";
import { DataTable } from "./DataTable";
import { mockData } from "./mockData";

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
    header: "Detection Mode",
    meta: {
      isNumeric: false,
    },
  }),
  columnHelper.accessor("sampleName", {
    cell: (info) => info.getValue(),
    header: "Sample Name",
    meta: {
      isNumeric: true,
    },
  }),
  columnHelper.accessor("sampleComment", {
    cell: (info) => info.getValue(),
    header: "comment",
    meta: {
      isNumeric: false,
    },
  }),
  columnHelper.accessor("column", {
    cell: (info) => info.getValue(),
    header: "column",
    meta: {
      isNumeric: true,
    },
  }),
  columnHelper.accessor("row", {
    cell: (info) => info.getValue(),
    header: "row",
    meta: {
      isNumeric: true,
    },
  }),
];

type GeneratedTableProps = {
  data?: ReadyRow[];
};

function GeneratedTable({ data = mockData }: GeneratedTableProps) {
  return (
    <div>
      <h3>GeneratedTable is here</h3>
      <DataTable data={data} columns={columns} />

      <Button
        onClick={() => {
          const s = getCsvContent(data);
          downloadFile({
            data: s,
            filename: "b18-data.csv",
            fileType: "text/csv",
          });
        }}
      >
        Download the table
      </Button>
    </div>
  );
}

export default GeneratedTable;
