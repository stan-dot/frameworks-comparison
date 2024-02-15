import { Divider, Row } from "antd";
import React from "react";

type BaseLayoutProps = {
  navChild: React.ReactNode;
  topChild: React.ReactNode;
  bottomChild: React.ReactNode;
};

function BaseLayout({ navChild, topChild, bottomChild }: BaseLayoutProps) {
  return (
    <div>
      <Divider orientation="left">Horizontal</Divider>
      <Row gutter={16}>{navChild}</Row>
      <Row>{topChild}</Row>

      <Row>{bottomChild}</Row>
    </div>
  );
}

export default BaseLayout;
