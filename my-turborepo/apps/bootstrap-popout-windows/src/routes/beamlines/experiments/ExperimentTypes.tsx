import { useState } from "react";
import BaseLayout from "../../../components/layouts/BaseLayout";
import I10Layout from "../../../components/layouts/I10Layout";

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("layout");
  const contacts = await getContacts(q);
  return { contacts, q };
}

const layouts = ["base", "i10"] as const;

export type LayoutType = (typeof layouts)[number];

function ExperimentTypes() {

  const [layout, setLayout] = useState<LayoutType>("base");
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
