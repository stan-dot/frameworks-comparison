import React from "react";
import { Offcanvas } from "react-bootstrap";

export type ServiceLink = {
  url: string;
  name: string;
  icon?: string;
};

type Props = {
  services: ServiceLink[];
};

const ServiceLinkList: React.FC<Props> = ({ services }) => {
  return (
    <Offcanvas.Body>
      <div className="list-group">
        {services.map((service, index) => (
          <a
            key={index}
            href={service.url}
            className="list-group-item list-group-item-action d-flex align-items-center"
            style={{ padding: "1rem" }} // Apply padding to each item
          >
            {service.icon && (
              <img
                src={service.icon}
                alt=""
                style={{ width: "24px", height: "24px", marginRight: "1rem" }}
              />
            )}
            {service.name}
          </a>
        ))}
      </div>
    </Offcanvas.Body>
  );
};

export default ServiceLinkList;
