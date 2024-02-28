import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ServiceLinkList, { ServiceLink } from "./ServiceLinkList";

const serviceLinks: ServiceLink[] = [
  { url: "https://ebic-pato-staging.diamond.ac.uk/", name: "Pato" },
  {
    url: "https://diamondlightsource.github.io/davidia/?path=/docs/plots-line--docs",
    name: "Davidia",
  },
  { url: "https://tizayi.github.io/dedi-web/", name: "Dedi-web" },
  { url: "https://dev-portal.diamond.ac.uk/", name: "dev-portal" },
  { name: "XAS standards", url: "<http://ws454:5174/submit>" }
];

function AppDrawer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Apps
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Here various DLS apps</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h4>DIAMOND Web Applications</h4>
          <ServiceLinkList services={serviceLinks} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AppDrawer;
