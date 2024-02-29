import { usePolling } from "@repo/utils/use-polling";
import { useState } from "react";
import { Stack } from "react-bootstrap";
import { redirect, useLoaderData } from "react-router-dom";
import { DevicesList } from "../../components/DevicesList";
import { useDevices } from "../../hooks/useDevices";
import { usePlans } from "../../hooks/usePlans";
import { ALL_BEAMLINES } from "./data";
import { PlanList } from "./plans/PlanList";
import { Plan } from "./plans/Plans";
import { BeamlineInfo, DeviceType, WorkerStateType } from "./types";
import { Link } from "react-router-dom";

const workerStateColors: Record<WorkerStateType, string> = {
  IDLE: "text-secondary",
  RUNNING: "text-success",
  PAUSING: "text-warning",
  PAUSED: "text-primary",
  HALTING: "text-danger",
  STOPPING: "text-danger",
  ABORTING: "text-danger",
  SUSPENDING: "text-warning",
  PANICKED: "text-danger",
  UNKNOWN: "text-dark",
};

export async function loader({ params }: { params: any }) {
  const name = params.beamlineName;
  let beamlineInfo: BeamlineInfo | undefined = undefined;
  try {
    // todo change to network discovery
    const bi = ALL_BEAMLINES.find((b) => b.name === name);
    if (bi) {
      beamlineInfo = bi;
    }
  } catch (error) {
    console.error("network error");
    redirect("/beamline/list");
  }
  return { beamlineInfo };
}

function BeamlinePanel() {
  const { beamlineInfo } = useLoaderData() as { beamlineInfo: BeamlineInfo };
  const [_, setWorkerState] = useState<string>(beamlineInfo.workerState);

  async function fetchWorkerState(abortSignal: AbortSignal) {
    try {
      const res = await fetch(`${beamlineInfo.apiUrl}/worker/state`, {
        signal: abortSignal,
      });
      const resp = await res.json();
      console.log(resp);
      if (res.ok && resp.ok) {
        setWorkerState(resp.data);
      } else {
        console.log(res);
        alert("Could not fetch worker state.");
      }
    } catch (err) {
      if (!abortSignal.aborted) {
        console.error(err);
      }
    }
  }

  const devices: DeviceType[] = useDevices(beamlineInfo.apiUrl);
  const plans: Plan[] = usePlans(beamlineInfo.apiUrl);

  const lastUpdatedWorker = usePolling(fetchWorkerState);

  return (
    <div>
      BeamlinePanel
      <h2>{beamlineInfo.name}</h2>
      <nav id="beamline-nav">
        <Stack direction='horizontal' gap={5}>
          <Link to={"./synoptic"} className="italics" style={{ textDecoration: 'underline' }}  >Synoptics</Link>
          <Link to={"./technical-ui"} className="italics" style={{ textDecoration: 'underline' }}  >Technical UI</Link>
          <Link to={"./experiments"} className="italics" style={{ textDecoration: 'underline' }}  >Experiment</Link>
        </Stack>

      </nav>
      <h6 className="card-subtitle mb-2 text-muted">
        Worker last polled:{" "}
        <span
          className={workerStateColors[lastUpdatedWorker as WorkerStateType]}
        >
          {lastUpdatedWorker}
        </span>
      </h6>
      <Stack direction="horizontal" gap={6} >
        <DevicesList devices={devices} />
        <PlanList plans={plans} beamlineName={beamlineInfo.name} />
      </Stack>
    </div>
  );
}

export default BeamlinePanel;
