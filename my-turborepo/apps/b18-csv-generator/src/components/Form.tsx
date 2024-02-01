import { DETECTION_MODES, DetectionModeType } from "../utils/initialTypes";
import { GeneratorSetup } from "../utils/sampleHolderSize";

type FormProps = {
  value: GeneratorSetup;
  handler: (g: Partial<GeneratorSetup>) => void;
};

export default function Form({ value, handler }: FormProps) {
  return (
    <>
      <h2>Input values for your samples</h2>
      <form>
        <h3>form area for defaults</h3>
        <select
          value={value.defaultDetectionMode}
          onChange={(e) => {
            handler({
              defaultDetectionMode: e.target.value as DetectionModeType,
            });
          }}
        >
          {DETECTION_MODES.map((v) => {
            return <option value={v}>{v}</option>;
          })}
        </select>
      </form>

      <>
        <h3>actual table</h3>
      </>
    </>
  );
}
