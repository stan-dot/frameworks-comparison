import React from "react";

import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  RowData,
} from "@tanstack/react-table";
import { useSkipper } from "./useSkipper";
import { ReadyRow, getCsvContent } from "../utils/sampleHolderSize";
import { makeSampleData } from "./makeSampleData";
import { Button, ChakraProvider, Stack } from "@chakra-ui/react";
import { downloadFile } from "@repo/utils/download-file";
import { ChangeElementModal } from "./ChangeElementModal";
import { ChemicalElement } from "../data/elements";
import { Filter } from "./Filter";

declare module "@tanstack/react-table" {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
  }
}

// Give our default column cell renderer editing superpowers!
const defaultColumn: Partial<ColumnDef<ReadyRow>> = {
  cell: ({ getValue, row: { index }, column: { id }, table }) => {
    const initialValue = getValue();
    // We need to keep and update the state of the cell normally
    const [value, setValue] = React.useState(initialValue);

    // When the input is blurred, we'll call our table meta's updateData function
    const onBlur = () => {
      table.options.meta?.updateData(index, id, value);
    };

    // If the initialValue is changed external, sync it up with our state
    React.useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    return (
      <input
        value={value as string}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
      />
    );
  },
};

export function NewSamplesTable() {
  const rerender = React.useReducer(() => ({}), {})[1];

  const columns = React.useMemo<ColumnDef<ReadyRow>[]>(
    () => [
      {
        header: "Name",
        footer: (props) => props.column.id,
        columns: [
          {
            accessorFn: (row) => row.element.name,
            id: "name",
            header: () => "Element name",
            footer: (props) => props.column.id,
          },
          {
            accessorFn: (row) => row.element.symbol,
            id: "symbol",
            header: () => <span>Element symbol</span>,
            footer: (props) => props.column.id,
          },
        ],
      },
      {
        header: "Edge",
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: "edge",
            header: () => "Edge",
            footer: (props) => props.column.id,
          },
          {
            header: "Detection Mode",
            columns: [
              {
                accessorKey: "detectionMode",
                header: () => <span>Detection Mode</span>,
                footer: (props) => props.column.id,
              },
              {
                accessorKey: "sampleName",
                header: "Sample Name",
                footer: (props) => props.column.id,
              },
              {
                accessorKey: "sampleComment",
                header: "Comment",
                footer: (props) => props.column.id,
              },
              {
                accessorKey: "repetitions",
                header: "Repetitions",
                footer: (props) => props.column.id,
              },
            ],
          },
        ],
      },
      {
        header: "Position in the tray",
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: "row",
            header: "Row",
            footer: (props) => props.column.id,
          },
          {
            header: "Column letter",
            accessorKey: "column_letter",
            footer: (props) => props.column.id,
          },
        ],
      },
    ],
    []
  );

  const [data, setData] = React.useState(() => makeSampleData(100));
  const refreshData = () => setData(() => makeSampleData(100));

  const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper();

  const table = useReactTable({
    data,
    columns,
    defaultColumn,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    autoResetPageIndex,
    // Provide our updateData function to our table meta
    meta: {
      updateData: (rowIndex, columnId, value) => {
        // Skip page index reset until after next rerender
        skipAutoResetPageIndex();
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex]!,
                [columnId]: value,
              };
            }
            return row;
          })
        );
      },
    },
    debugTable: true,
  });

  return (
    <div className="p-2">
      <div className="h-2" />
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanFilter() ?? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        )}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  console.log("cell values: ", cell);
                  if (cell.column.id === "symbol") {
                    return (
                      <td key={cell.id}>
                        <ChangeElementModal
                          callback={(e) => {
                            setData((data) => {
                              data[parseInt(cell.row.id)].element = e;
                              return data;
                            });
                          }}
                        />
                        {/* <Button onClick={() => {
                                                const s: string = `${cell.row.id} and col: ${cell.column.id}`
                                                window.alert(s)
                                            }} >
                                                test
                                            </Button> */}
                      </td>
                    );
                  }
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-2" />
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <Stack direction="row">
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
        <div>{table.getRowModel().rows.length} Rows</div>
        <div>
          <button onClick={() => rerender()}>Force Rerender</button>
        </div>
        <div>
          <button onClick={() => refreshData()}>Refresh Data</button>
        </div>
        <ChakraProvider>
          <ChangeElementModal
            callback={(e) => window.alert(`changed element: ${e}`)}
          />
        </ChakraProvider>
      </Stack>
    </div>
  );
}
