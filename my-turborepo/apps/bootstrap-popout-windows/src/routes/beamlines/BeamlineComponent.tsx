import { BeamlineInfo } from "./types";

export const BeamlineComponent = ({
  beamlineInfo,
}: {
  beamlineInfo: BeamlineInfo;
}) => {
  const { name, url, experimentTypes, description } = beamlineInfo;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <a
          href={url}
          className="card-link"
          style={{ textDecoration: "underline" }}
        >
          Beamline URL
        </a>
        <ul className="list-group list-group-flush">
          {experimentTypes.map((type, index) => (
            <li key={index} className="list-group-item">
              {type.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
