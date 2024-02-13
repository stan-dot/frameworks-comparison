import { ReadyRow } from "../utils/sampleHolderSize";

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

export const mockData: ReadyRow[] = [r1, r2];
