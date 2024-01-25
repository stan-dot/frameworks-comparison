import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { ReactSsrApp } from "./app";

interface IRenderProps {
  path: string;
}

export const render = async ({ path }: IRenderProps) => {
  return ReactDOMServer.renderToString(
    <StaticRouter location={path}>
      <ReactSsrApp />
    </StaticRouter>
  );
};

/**
 * use `loadScripts` to inject scripts to the head
 * during SSR.
 */
// export const loadScripts = async () => {
//   return '<script></script>';
// }
