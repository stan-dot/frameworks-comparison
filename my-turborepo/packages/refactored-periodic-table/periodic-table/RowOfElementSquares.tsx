import React from "react";
import { ElementType } from "./elements";
import ElementSquare from "./ElementSquare";


function range(start: number, stop: number, step: number = 1) {
  const length = (stop - start) / step + 1;
  return Array.from({ length }, (_, i) => start + i * step);
}

export function RowOfElementSquares({
  start,
  end,
  callback,
}: {
  start: number;
  end: number;
  callback: (e: ElementType) => void;
}) {
  const arr = range(start, end);
  return (
    <>
      {arr.map((n) => (
        <ElementSquare atomicNumber={n} callback={callback} />
      ))}
    </>
  );
}
