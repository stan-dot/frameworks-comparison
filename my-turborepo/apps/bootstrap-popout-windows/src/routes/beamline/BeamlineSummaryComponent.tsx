import { BeamlineInfo } from "./types";

export const BeamlineSummaryComponent = ({
  beamlineInfo,
}: {
  beamlineInfo: BeamlineInfo;
}) => {
  const { name, url, experimentTypes } = beamlineInfo;

  return (
    <div className="card" style={{ width: "15rem", marginBottom: "1rem" }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <a href={url} className="card-link">
          Beamline URL
        </a>
        {experimentTypes.length > 0 && (
          <h6 className="card-subtitle mb-2 mt-2">
            Experiment Types number: {experimentTypes.length}
          </h6>
        )}
      </div>
    </div>
  );
};
