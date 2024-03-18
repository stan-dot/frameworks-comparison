import { ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

/**
 * note the mechanism with new window is based on this
 */
type PopoutLinkProps = {
  path: string;
  width?: number;
  height?: number;
};

const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 400;

export function PopoutLink({ path, width, height }: PopoutLinkProps) {
  const finalWidth = width ?? DEFAULT_WIDTH;
  const finalHeight = height ?? DEFAULT_HEIGHT;

  return (
    <ButtonGroup>
      <Link className="btn btn-secondary" target="_blank" to={path}>
        Open in new tab
      </Link>
      <a
        className="btn btn-secondary"
        onClick={() => {
          const sizeParams = `height=${finalHeight},width=${finalWidth}`;
          window.open(path, `name-${path}`, sizeParams);
        }}
      >
        Popout
      </a>
    </ButtonGroup>
  );
}
