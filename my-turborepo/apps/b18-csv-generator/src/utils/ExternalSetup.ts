import {
  DetectorType,
  MonocrystalType,
  Offsets
} from "./initialTypes";

type ExternalSetup = {
  detector: DetectorType;
  monocrystal: MonocrystalType;
  offsets: Offsets; // todo these depend on the holder
};
