import { useState } from "react";
import { Component1, Component2, Component3 } from "@repo/ui/test-components";
import Baselayout from "./BaseLayout";
import { Flex } from "antd";
const layouts = ["base", "i20"] as const;

export type LayoutType = (typeof layouts)[number];

function RootContainer() {
  const [currentLayout, setCurrentLayout] = useState<LayoutType>("base");

  return (
    <div style={{ display: "absolute" }}>
      <LayoutSwitcher current={currentLayout} callback={setCurrentLayout} />
      {currentLayout === "base" && (
        <Baselayout
          navChild={<Component1 />}
          topChild={<Component2 />}
          bottomChild={<Component3 />}
        />
      )}
    </div>
  );
}

export default RootContainer;

function LayoutSwitcher({
  current,
  callback,
}: {
  current?: LayoutType;
  callback: (l: LayoutType) => void;
}) {
  return (
    <Flex gap="middle" vertical={false}>
      {layouts.map((l) => {
        return (
          <button
            onClick={(_e) => {
              if (
                layouts.includes(l) &&
                (l as unknown as LayoutType) !== current
              ) {
                callback(l);
              }
            }}
            style={{ color: l === current ? "red" : "black" }}
          >
            {l.toUpperCase()}
          </button>
        );
      })}
    </Flex>
  );
}
