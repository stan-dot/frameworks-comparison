import { Outlet, useLoaderData } from "react-router-dom";
import { BeamlineSummaryComponent } from "./BeamlineSummaryComponent";
import { beamlines as hardcodedBeamlines } from "./data";
import { BeamlineInfo } from "./types";

export async function loader() {
  let beamlines: BeamlineInfo[] = [];
  try {
    // todo update to async
    beamlines = hardcodedBeamlines;
  } catch (error) {
    console.error("network error");
  }
  return { beamlines };
}

function BeamlinesList() {
  const { beamlines } = useLoaderData() as { beamlines: BeamlineInfo[] };
  return (
    <div>
      <div id="sidebar">
        BeamlinesList
        {beamlines.map((b, i) => (
          <div key={`beamline-summary-${i}`}>
            <BeamlineSummaryComponent beamlineInfo={b} />
          </div>
        ))}
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}

export default BeamlinesList;
