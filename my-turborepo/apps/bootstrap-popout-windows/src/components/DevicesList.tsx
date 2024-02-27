import React from "react";
import { DeviceType } from "../routes/beamlines/types";
import { Accordion } from "react-bootstrap";

// Assuming DeviceType is defined elsewhere and imported into this file
// export type DeviceType = {
//   name: string;
//   protocols: string[];
// };

type DevicesListProps = {
  devices: DeviceType[];
};

export const DevicesList = ({ devices }: DevicesListProps) => {
  return (
    <Accordion>
      <ol className="list-group list-group-numbered">
        {devices.map((device, index) => (
          <li key={index} className="list-group-item">
            <Accordion.Item eventKey={index.toString()}>
              <Accordion.Header>
                <div>{device.name} has those protocols: </div>
              </Accordion.Header>
              {device.protocols && device.protocols.length > 0 && (
                <Accordion.Body>
                  <ul className="list-group">
                    {device.protocols.map((protocol, protocolIndex) => (
                      <li key={protocolIndex} className="list-group-item">
                        {protocol}
                      </li>
                    ))}
                  </ul>
                </Accordion.Body>
              )}
            </Accordion.Item>
          </li>
        ))}
      </ol>
    </Accordion>
  );
};
