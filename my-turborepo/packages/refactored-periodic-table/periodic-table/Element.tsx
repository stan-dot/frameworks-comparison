import { ElementType, elements } from "./elements";
import React from "react";

type Props = {
  atomicNumber: number;
  callback: (e: ElementType) => void;
};

const BG_COLORS = {
  metalloid: "#fef7e0",
  "post transition metal": "#d6f9e8",
  nonmetal: "#e2eeff",
  "transition metal": "#f3e8fd",
  halogen: "#eaafea",
  "noble gas": "#ffe7eb",
  "alkali metal": "#d8f8ff",
  "alkaline earth metal": "#ffe7eb",
  lanthanide: "#dff3ff",
  actinide: "#ffe6d4",
};

export default function Element({ atomicNumber, callback }: Props) {
  const element = elements[atomicNumber - 1];
  if (!element) {
    return <div></div>;
  }

  const bgcolor =
    BG_COLORS[element.Type as keyof typeof BG_COLORS] ?? "inherit";

  return (
    <div
      className="element"
      onClick={_ => callback(element)}
      style={{
        cursor: "pointer",
        backgroundColor: bgcolor,
        textAlign: "center",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        borderRadius: 3,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="symbol">{element.Symbol}</div>
      <div
        className="name"
        style={{
          fontSize: "small",
          width: "100%",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {element.Name}
      </div>
      <div className="weight" style={{ fontSize: "small" }}>
        {element["Atomic Weight"]}
      </div>
      <div
        className="number"
        style={{ position: "absolute", top: 0, left: 1, fontSize: "x-small" }}
      >
        {atomicNumber}
      </div>
    </div>
  );
}
