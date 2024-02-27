import { BeamlineInfo } from "./types";

const j20Info: BeamlineInfo = {
  name: "j20",
  experimentTypes: [],
  apiUrl: "https://j20-blueapi.diamond.ac.uk",
  infoUrl: "https://www.diamond.ac.uk/Instruments/Spectroscopy/I20/EDE_Branchline.html",
  description: "deprecated beamline",
  workerState: "IDLE",
  ready: true
};

const i10Info: BeamlineInfo = {
  name: "i10",
  infoUrl: "https://www.diamond.ac.uk/Instruments/Magnetic-Materials/I10.html",
  apiUrl: 'http://172.23.122.81/docs',
  experimentTypes: [],
  description: "I10: Beamline for Advanced Dichroism Experiments (BLADE)",
  workerState: "IDLE",
  ready: false
}

export const ALL_BEAMLINES: BeamlineInfo[] = [j20Info, i10Info];
