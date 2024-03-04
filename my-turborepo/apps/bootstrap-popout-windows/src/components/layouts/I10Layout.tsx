import { LayoutProps } from "./LayoutProps";
import "bootstrap/dist/css/bootstrap.min.css";
import { PopoutLink } from "./PopoutLink";
import { Container } from "react-bootstrap";

const I10Layout: React.FC<LayoutProps> = ({
  navChild,
  topChild,
  bottomChild,
}) => {
  return (
    <Container fluid>
      <h3> i10 layout example</h3>
      <div className="row mb-2 m-8">
        <div className="col-12" style={{ gridArea: "header" }}>
          <PopoutLink path={"?element=top"} width={800} height={80} />
          {topChild} {/* Assuming topChild is used for the header */}
        </div>
      </div>
      <div className="row mb-2 mx-5">
        <div className="col-9" style={{ gridArea: "main" }}>
          <PopoutLink path={"?element=nav"} />
          {navChild} {/* Assuming navChild is used for the main content */}
        </div>
        <div className="col-3" style={{ gridArea: "sidebar" }}>
          <PopoutLink path={"?element=bottom"} width={1000} height={800} />
          {bottomChild} {/* Assuming bottomChild is used for the sidebar */}
        </div>
      </div>
      <div className="row m-2 p-1">
        <div className="col-12" style={{ gridArea: "footer" }}>
          {/* Footer content here */}
        </div>
      </div>
    </Container>
  );
};

export default I10Layout;
