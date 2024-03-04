import { redirect, useSearchParams } from "react-router-dom";
import BaseLayout from "../../../components/layouts/BaseLayout";
import I10Layout from "../../../components/layouts/I10Layout";
import { LayoutProps } from "../../../components/layouts/LayoutProps";
import { Component1, Component2, Component3 } from "@repo/ui/test-components";
import { Button, ButtonGroup } from "react-bootstrap";

const layouts = ["base", "i10"] as const;

export type LayoutType = (typeof layouts)[number];

const oneChildRendering = ["nav", "top", "bottom", "all"] as const;

export type OneComponentIndicator = (typeof oneChildRendering)[number];

function ExperimentPanel() {
  let [searchParams, setSearchParams] = useSearchParams();
  const layout: LayoutType =
    (searchParams.get("layout") as LayoutType) ?? "base";

  const oneElement: OneComponentIndicator =
    (searchParams.get("element") as OneComponentIndicator) ?? "all";
  console.log("search params: ", searchParams);
  console.log("layout: ", layout);
  console.log("one component: ", oneElement);

  return (
    <div>
      {oneElement === "nav" && <Component1 />}
      {oneElement === "top" && <Component2 />}
      {oneElement === "bottom" && <Component3 />}
      {oneElement === "all" && (
        <>
          <h3>ExperimentTypes</h3>
          <ButtonGroup>
            <Button
              variant="secondary"
              disabled={layout !== layouts[1]}
              onClick={() => {
                console.log("changing the layout");
                // redirect("../experiments?layout=base");
                setSearchParams({ layout: "base" });
              }}
            >
              Change layout to base
            </Button>
            <Button
              variant="secondary"
              disabled={layout !== layouts[0]}
              onClick={() => {
                console.log("changing the layout");
                // redirect("../experiments?layout=i10");
                setSearchParams({ layout: "i10" });
              }}
            >
              Change layout to i10-like
            </Button>
          </ButtonGroup>
          <LayoutManager
            layout={layout}
            layoutParams={{
              navChild: <Component1 />,
              topChild: <Component2 />,
              bottomChild: <Component3 />,
            }}
          />
          )
        </>
      )}
    </div>
  );
}

function LayoutManager({
  layout,
  layoutParams,
}: {
  layout: LayoutType;
  layoutParams: LayoutProps;
}) {
  console.log("layout in manager: ", layout);
  return (
    <div>
      {layout === "base" && <BaseLayout {...layoutParams} />}
      {layout === "i10" && <I10Layout {...layoutParams} />}
    </div>
  );
}

export default ExperimentPanel;
