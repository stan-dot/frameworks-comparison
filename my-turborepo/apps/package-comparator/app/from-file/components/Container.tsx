"use client";

import { useState } from "react";

export type GeneratorSetup = {
  packagesFiles: File[];
};

// todo transform into a list of packages later

function Container() {
  const [first, setfirst] = useState("");
  return <div>Container</div>;
}

export default Container;
