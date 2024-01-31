import { ChemicalElement, elementsAndIsotopes } from "../data/elements";
import {
  Holder,
  DetectorType,
  MonocrystalType,
  Offsets,
  DetectionModeType,
  EdgeType,
} from "./initialTypes";

const sampleHolderSize: Holder = { name: "default", width: 4, height: 6 };

type Setup = {
  detector: DetectorType;
  monocrystal: MonocrystalType;
  offsets: Offsets; // todo these depend on the holder
};

type GeneratorSetup = {
  defaultDetectionMode: DetectionModeType;
  sampleNamePrefix: string;
  startingCount: number;
  // no space for comment
  samplesNumber: number;
  defaultRepetitionsNumber: number;
  holder: Holder;
};

function generateRows({
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

// https://www.tutorialspoint.com/convert-number-to-alphabet-letter-javascript
function toAlphabet(num: number): string {
  if (num < 1 || num > 26 || typeof num !== "number") {
    // todo error handling
    return "";
  }
  //  const leveller = 64;
  //since actually A is represented by 65 and we want to represent it with one
  //  return String.fromCharCode(num + leveller);
  return String.fromCharCode(num);
} // Row index, Scan, Detector, Sample, frameX, Move frameX, frameY, Move frameY, Description, Reference foil, Move reference wheel, Output, Script/command before first repetition, Number of repetitions
//  interactive array shape calculator for column and row size
// Element (e.g Pt)	Edge (e.g. L3)	Detection Mode (F or T)	Sample name	Sample comment	Column	Row	repetitions

export function autogenerateSampleNames(
  prefix: string,
  startingCount: number,
  samplesNumber: number
): string[] {
  return new Array(samplesNumber).map((_, i) => `${prefix}_${startingCount + i}`)
}

export type ReadyRow = {
  element: ChemicalElement; //vallidate between 13 and 93 Z
  edge: EdgeType;
  detectionMode: DetectionModeType;
  sampleName: string;
  sampleComment: string;
  column: string;
  row: number; // min 1
  repetitions: number; // min 1
};
