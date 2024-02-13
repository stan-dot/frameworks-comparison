import { ChemicalElement, elementsAndIsotopes } from "../data/elements";
import { DetectionModeType, EdgeType, Holder } from "./initialTypes";

const smallSampleHolder: Holder = { name: "small", width: 4, height: 6 };

const mediumSampleHolder: Holder = {
  name: "medium",
  width: 6,
  height: 8,
};

const largeSampleHolder: Holder = {
  name: "large",
  width: 10,
  height: 10,
};

export const AVAILABLE_HOLDERS: Holder[] = [
  smallSampleHolder,
  mediumSampleHolder,
  largeSampleHolder,
];

export type ReadyRow = {
  element: ChemicalElement; //validate between 13 and 93 Z
  edge: EdgeType;
  detectionMode: DetectionModeType;
  sampleName: string;
  sampleComment: string;
  column: string;
  row: number; // min 1
  repetitions: number; // min 1
};

export const defaultGeneratorSetup: GeneratorSetup = {
  defaultDetectionMode: "T",
  sampleNamePrefix: "sample",
  startingCount: 0,
  samplesNumber: 10,
  defaultRepetitionsNumber: 2,
  holder: smallSampleHolder,
};

export type GeneratorSetup = {
  defaultDetectionMode: DetectionModeType;
  sampleNamePrefix: string;
  startingCount: number;
  // no space for comment
  samplesNumber: number;
  defaultRepetitionsNumber: number;
  holder: Holder;
};

export function generateRows({
  defaultDetectionMode,
  sampleNamePrefix,
  startingCount,
  samplesNumber,
  defaultRepetitionsNumber,
  holder,
}: GeneratorSetup): ReadyRow[] {
  const names: string[] = autogenerateSampleNames(
    sampleNamePrefix,
    startingCount,
    samplesNumber
  );

  const rows: ReadyRow[] = names.map((n, i) => {
    const colNumber = Math.floor(i / holder.height) + 1;
    const rowNumber = (i % holder.height) + 1;
    const colName = toAlphabet(colNumber);

    const r: ReadyRow = {
      element: elementsAndIsotopes[0],
      edge: "K",
      detectionMode: defaultDetectionMode,
      sampleName: n,
      sampleComment: "",
      column: colName,
      row: rowNumber,
      repetitions: defaultRepetitionsNumber,
    };
    return r;
  });
  return rows;
}

// HELPER FUNCTIONS
// https://www.tutorialspoint.com/convert-number-to-alphabet-letter-javascript
function toAlphabet(num: number): string {
  if (num < 1 || num > 26 || typeof num !== "number") {
    // todo error handling
    return "1";
  }
  const leveller = 64;
  // since actually A is represented by 65 and we want to represent it with one
  return String.fromCharCode(num + leveller);
}

function autogenerateSampleNames(
  prefix: string,
  startingCount: number,
  samplesNumber: number
): string[] {
  return new Array(samplesNumber).map(
    (_, i) => `${prefix}_${startingCount + i}`
  );
}

export function downloadAsCsv(a: Array<any>): void {
  // https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
  const csvContent =
    "data:text/csv;charset=utf-8," + a.map((e) => e.join(",")).join("\n");

  const encodedUri = encodeURI(csvContent);

  const link = document.createElement("download");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "b18-data.csv");
  document.body.appendChild(link);
  link.click();
}

export function downloadRowsAsCsv(a: Array<ReadyRow>): void {
  // https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
  const headers: string[] = Object.getOwnPropertyNames(a[0]);
  const joinedHeaderLine = headers.join(",").concat("\n");
  const valueRows = a.map(e=>Object.values(e).join(',')).join("\n");
  const csvContent: string = `data:text/csv;charset=utf-8,${joinedHeaderLine}"${valueRows}`;

  const encodedUri = encodeURI(csvContent);

  const link = document.createElement("download");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "b18-data.csv");
  document.body.appendChild(link);
  link.click();
}
