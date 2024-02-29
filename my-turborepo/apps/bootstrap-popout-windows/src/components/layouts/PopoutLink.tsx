import { Link } from "react-router-dom";

export function PopoutLink({ path }: { path: string; }) {
  return <div className="btn btn-default">
    <Link target="_blank" to={path}>Open in own window</Link>;

  </div>
}
