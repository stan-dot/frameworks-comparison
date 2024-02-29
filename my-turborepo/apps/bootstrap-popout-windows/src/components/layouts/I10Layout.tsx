import { LayoutProps } from "./LayoutProps";
import "bootstrap/dist/css/bootstrap.min.css";
import { PopoutLink } from "./PopoutLink";

const I10Layout: React.FC<LayoutProps> = ({
  navChild,
  topChild,
  bottomChild,
}) => {
  return (
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-12" style={{ gridArea: "header" }}>
          <PopoutLink path={"element=top"} />
          {topChild} {/* Assuming topChild is used for the header */}
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-9" style={{ gridArea: "main" }}>
          <PopoutLink path={"element=nav"} />
          {navChild} {/* Assuming navChild is used for the main content */}
        </div>
        <div className="col-3" style={{ gridArea: "sidebar" }}>
          <PopoutLink path={"element=bottom"} />
          {bottomChild} {/* Assuming bottomChild is used for the sidebar */}
        </div>
      </div>
      <div className="row">
        <div className="col-12" style={{ gridArea: "footer" }}>
          {/* Footer content here */}
        </div>
      </div>
    </div>
  );
};

export default I10Layout;
