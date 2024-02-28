import React from "react";
import { Link } from "react-router-dom";

export function PopoutLink({ path }: { path: string; }) {
  return <Link target="_blank" to={path}>Open in own window</Link>;
}
