import { BeamlineInfo } from "./types";

export const j20Info: BeamlineInfo = {
  name: "j20",
  experimentTypes: [],
  url: "https://j20-blueapi.diamond.ac.uk",
  description: "deprecated beamline",
  workerState: "IDLE"
};


export const beamlines: BeamlineInfo[] = [j20Info];

