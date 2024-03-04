import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

type PopoutLinkProps = {
  path: string;
  width?: number;
  height?: number;
};

const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 400;

export function PopoutLink({
  path,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
}: PopoutLinkProps) {
  return (
    <Stack direction="vertical">
      <Link target="_blank" to={path}>
        Open in own window
      </Link>
      <a
        style={{ textDecoration: "underline", cursor:'pointer' }}
        onClick={() => {
          const sizeParams = `height=${height},width=${width}`;
          window.open(path, "name", sizeParams);
        }}
      >
        Open in own window 2
      </a>
    </Stack>
  );
}
