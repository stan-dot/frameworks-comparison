import React from "react";
import { LayoutProps } from "./LayoutProps";
import "bootstrap/dist/css/bootstrap.min.css";
import { PopoutLink } from "./PopoutLink";

// BaseLayout component with Bootstrap
const BaseLayout: React.FC<LayoutProps> = ({
  navChild,
  topChild,
  bottomChild,
}) => {
  return (
    <div className="container my-custom-theme">
      <div className="row">
        <div className="col-8">
          <PopoutLink path={"../element=nav"} />
          {navChild}
        </div>
        <div className="col-4 d-none d-md-block">
          {/* This column intentionally left blank for layout */}
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 d-none d-md-block">
          <PopoutLink path={"../element=top"} />
          {topChild}
        </div>
        <div className="col-md-8">
          <PopoutLink path={"../element=bottom"} />
          {bottomChild}
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
