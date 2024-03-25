import { Button, ButtonGroup } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import BaseLayout from "../../../components/layouts/BaseLayout";
import I10Layout from "../../../components/layouts/I10Layout";
import { LayoutProps } from "../../../components/layouts/LayoutProps";
import Tree from "../../../components/mocks/Tree";
import Console from "../../../components/mocks/Console";
import Visualization from "../../../components/mocks/Visualization";

const layouts = ["base", "i10"] as const;

export type LayoutType = (typeof layouts)[number];

const oneChildRendering = ["nav", "top", "bottom", "all"] as const;

export type OneComponentIndicator = (typeof oneChildRendering)[number];

function ExperimentPanel() {
  const [searchParams, setSearchParams] = useSearchParams();
  const layout: LayoutType =
    (searchParams.get("layout") as LayoutType) ?? "base";

  const oneElement: OneComponentIndicator =
    (searchParams.get("element") as OneComponentIndicator) ?? "all";
  console.log("search params: ", searchParams);
  console.log("layout: ", layout);
  console.log("one component: ", oneElement);
  if (oneElement !== "all") {
    document.title = `${oneElement} Window`;
  }

  return (
    <div>
      {oneElement === "nav" && (
        <div style={{ width: "200vw", display: "absolute", height: "200vh" }}>
          {/* this is not working, overriding the outlet does not work quite the best */}
          <Tree />
        </div>
      )}
      {oneElement === "top" && <Console />}
      {oneElement === "bottom" && <Visualization />}
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
              navChild: <Tree />,
              topChild: <Console />,
              bottomChild: <Visualization />,
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
