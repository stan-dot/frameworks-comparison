import { useSearchParams } from "react-router-dom";
import BaseLayout from "../../../components/layouts/BaseLayout";
import I10Layout from "../../../components/layouts/I10Layout";

const layouts = ["base", "i10"] as const;

export type LayoutType = (typeof layouts)[number];

function ExperimentTypes() {
  let [searchParams, setSearchParams] = useSearchParams();

  const layout: LayoutType =
    (searchParams.get("layout") as LayoutType) ?? "base";

  return (
    <div>
      ExperimentTypes
      {layout === "base" ?? (
        <BaseLayout
          navChild={undefined}
          topChild={undefined}
          bottomChild={undefined}
        />
      )}
      {layout === "i10" ?? (
        <I10Layout
          navChild={undefined}
          topChild={undefined}
          bottomChild={undefined}
        />
      )}
    </div>
  );
}

export default ExperimentTypes;
