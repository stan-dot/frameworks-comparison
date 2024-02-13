import { number } from "joi";
import { DETECTION_MODES, DetectionModeType } from "../utils/initialTypes";
import { GeneratorSetup, AVAILABLE_HOLDERS } from "../utils/sampleHolderSize";

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
        <div key='form-field-1'>
          <label htmlFor="defaultSelectionMode">
            Default selection (T or F)
          </label>
          <select
            value={value.defaultDetectionMode}
            id="defaultSelectionMode"
            onChange={(e) => {
              handler({
                defaultDetectionMode: e.target.value as DetectionModeType,
              });
            }}
          >
            {DETECTION_MODES.map((v, i) => {
              return <option key={`detection-mode-option-${i}`} value={v}>{v}</option>;
            })}
          </select>
        </div>

        <div key='form-field-2'>
          <label htmlFor="sampleNamePrefix">Sample Name prefix</label>
          <input
            id="sampleNamePrefix"
            type="text"
            maxLength={5}
            value={value.sampleNamePrefix}
            onChange={(e) => {
              handler({ sampleNamePrefix: e.target.value });
            }}
          />
        </div>

        <div key='form-field-3'>
          <label htmlFor="startingCount">
            starting number for creating the new name
          </label>
          <input
            id="startingCount"
            type="number"
            max={5}
            value={value.startingCount}
            onChange={(e) => {
              handler({ startingCount: parseInt(e.target.value) });
            }}
          />
        </div>

        <div key='form-field-4'>
          <label htmlFor="samplesNumber">Total number of samples</label>
          <input
            id="samplesNumber"
            type="number"
            max={50}
            value={value.samplesNumber}
            onChange={(e) => {
              handler({ samplesNumber: parseInt(e.target.value) });
            }}
          />
        </div>

        <div key='form-field-5'>
          <label htmlFor="defaultRepetitionsNumber">
            Default repetitions number
          </label>
          <input
            id="defaultRepetitionsNumber"
            type="number"
            max={2}
            value={value.defaultRepetitionsNumber}
            onChange={(e) => {
              handler({ defaultRepetitionsNumber: parseInt(e.target.value) });
            }}
          />
        </div>
        <div key='form-field-6'>
          <label htmlFor="holderSelection">Holder selection</label>
          <select
            value={value.holder.name}
            id="holderSelection"
            onChange={(e) => {
              const n: number = parseInt(e.target.value);
              const newHolder = AVAILABLE_HOLDERS[n];
              window.alert(newHolder.name);
              handler({
                holder: newHolder,
              });
            }}
          >
            {AVAILABLE_HOLDERS.map((v, i) => {
              return <option key={`holder-option-${i}`} value={i}>{v.name}</option>;
            })}
          </select>
        </div>
      </form>
    </>
  );
}
