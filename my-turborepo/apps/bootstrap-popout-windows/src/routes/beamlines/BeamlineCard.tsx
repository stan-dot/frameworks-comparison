import { NavLink } from "react-router-dom";
import { BeamlineInfo } from "./types";
import { Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const BeamlineCard = ({
  beamlineInfo,
}: {
  beamlineInfo: BeamlineInfo;
}) => {
  const { name, infoUrl, experimentTypes } = beamlineInfo;

  return (
    <div className="card" style={{ width: "15rem", marginBottom: "1rem" }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <Stack>
          <a
            href={infoUrl}
            className="card-link"
            style={{ textDecoration: "underline" }}
            target="_blank"
          >
            Beamline external URL
          </a>
          <NavLink to={`../${name}`}>go to {name} screen</NavLink>
        </Stack>
        {experimentTypes.length > 0 && (
          <h6 className="card-subtitle mb-2 mt-2">
            Experiment Types number: {experimentTypes.length}
          </h6>
        )}
      </div>
    </div>
  );
};
