import { useLoaderData } from "react-router-dom";
import { BeamlineCard } from "./BeamlineCard";
import { ALL_BEAMLINES } from "./data";
import { BeamlineInfo } from "./types";

export async function loader({ params }) {
  const name = params.beamlineName;
  let beamlines: BeamlineInfo[] = [];
  try {
    // todo update to async
    beamlines = ALL_BEAMLINES;
  } catch (error) {
    console.error("network error");
  }
  return { beamlines, name };
}

function BeamlinesListRoute() {
  const { beamlines } = useLoaderData() as { beamlines: BeamlineInfo[] };
  return (
    <div>
      <>
        BeamlinesList
        {beamlines.map((b, i) => (
          <div key={`beamline-summary-${i}`}>
            <BeamlineCard beamlineInfo={b} />
          </div>
        ))}
      </>
    </div>
  );
}

export default BeamlinesListRoute;
