import { allowedElements } from "../data/elements";
import { ReadyRow } from "../utils/sampleHolderSize";

const r1: ReadyRow = {
  element: allowedElements.at(1)!,
  edge: "K",
  detectionMode: "T",
  sampleName: "Helium test",
  sampleComment: "Test comment 1",
  column_letter: 2,
  row: 3,
  repetitions: 1,
};

const r2: ReadyRow = {
  element: allowedElements.at(-1)!,
  edge: "K",
  detectionMode: "T",
  sampleName: "Oganesson test",
  sampleComment: "Test comment 2",
  column_letter: 3,
  row: 4,
  repetitions: 2,
};

export const mockData: ReadyRow[] = [r1, r2];
