import { BeamlineInfo } from "./types";

const j20Info: BeamlineInfo = {
  name: "j20",
  experimentTypes: [],
  url: "https://j20-blueapi.diamond.ac.uk",
  description: "deprecated beamline",
  workerState: "IDLE"
};

const i10Info: BeamlineInfo = {
  name: "i10",
  url: "https://www.diamond.ac.uk/Instruments/Magnetic-Materials/I10.html",
  experimentTypes: [],
  description: "I10: Beamline for Advanced Dichroism Experiments (BLADE)",
  workerState: "IDLE"
}



export const beamlines: BeamlineInfo[] = [j20Info, i10Info];

