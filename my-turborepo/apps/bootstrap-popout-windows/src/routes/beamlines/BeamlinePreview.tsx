import { usePolling } from "@repo/utils/use-polling";
import { useState } from "react";
import { redirect, useLoaderData } from "react-router-dom";
import { beamlines } from "./data";
import { BeamlineInfo, WorkerStateType } from "./types";
import { BeamlineComponent } from "./BeamlineComponent";

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

export async function loader({ params }) {
  const name = params.beamlineName;
  let beamlineInfo: BeamlineInfo | undefined = undefined;
  try {
    // todo change to network discovery
    const bi = beamlines.find((b) => b.name === name);
    if (bi) {
      beamlineInfo = bi;
    }
  } catch (error) {
    console.error("network error");
    redirect("/beamline/list");
  }
  return { beamlineInfo };
}

function BeamlinePreview() {
  const { beamlineInfo } = useLoaderData() as { beamlineInfo: BeamlineInfo };
  const [_, setWorkerState] = useState<string>(beamlineInfo.workerState);

  async function fetchWorkerState(abortSignal: AbortSignal) {
    try {
      const res = await fetch(`${beamlineInfo.url}/worker/state`, {
        signal: abortSignal,
      });
      const resp = await res.json();
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

  const lastUpdatedWorker = usePolling(fetchWorkerState);

  return (
    <div>
      BeamlinePreview
      <h2>{beamlineInfo.name}</h2>
      <p>{lastUpdatedWorker}</p>
      <h6 className="card-subtitle mb-2 text-muted">
        Worker State:{" "}
        <span
          className={workerStateColors[lastUpdatedWorker as WorkerStateType]}
        >
          {lastUpdatedWorker}
        </span>
      </h6>
      <BeamlineComponent beamlineInfo={beamlineInfo} />
    </div>
  );
}

export default BeamlinePreview;
