import React from "react";

type BaseLayoutProps = {
  navChild: React.ReactNode;
  topChild: React.ReactNode;
  bottomChild: React.ReactNode;
};

function BaseLayout({ navChild, topChild, bottomChild }: BaseLayoutProps) {
  return <div>BaseLayout</div>;
}

export default BaseLayout;
