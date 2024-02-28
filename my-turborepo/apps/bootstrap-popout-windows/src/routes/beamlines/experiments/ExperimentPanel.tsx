import { useSearchParams } from "react-router-dom";
import BaseLayout from "../../../components/layouts/BaseLayout";
import I10Layout from "../../../components/layouts/I10Layout";
import { LayoutProps } from "../../../components/layouts/LayoutProps";
import { Component1, Component2, Component3 } from "@repo/ui/test-components";

const layouts = ["base", "i10"] as const;

export type LayoutType = (typeof layouts)[number];

const oneChildRendering = ["nav", "top", "bottom", "all"] as const;

export type OneComponentIndicator = (typeof oneChildRendering)[number];

function ExperimentPanel() {
  let [searchParams, setSearchParams] = useSearchParams();

  const layout: LayoutType =
    (searchParams.get("layout") as LayoutType) ?? "base";

  const oneComponent: OneComponentIndicator = (searchParams.get('component') as OneComponentIndicator) ?? "all";

  return (
    <div>
      <h3>
        ExperimentTypes
      </h3>
      {oneComponent === 'nav' && <Component1 />}
      {oneComponent === 'top' && <Component2 />}
      {oneComponent === 'bottom' && <Component3 />}
      {oneComponent === 'all' && <LayoutManager layout={layout} layoutParams={{
        navChild: <Component1 />,
        topChild: <Component2 />,
        bottomChild: <Component3 />,
      }} />

      }
    </div>
  );
}



function LayoutManager({ layout, layoutParams }: { layout: LayoutType, layoutParams: LayoutProps }) {
  return (
    <div>
      {layout === "base" ?? <BaseLayout {...layoutParams} />}
      {layout === "i10" ?? <I10Layout {...layoutParams} />}
    </div>
  )
}


export default ExperimentPanel;
