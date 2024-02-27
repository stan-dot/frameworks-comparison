import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import ErrorPage from "./error-page.tsx";
import "./index.css";
import BeamlinePanel, {
  loader as BeamlineLoader,
} from "./routes/beamlines/BeamlinePanel.tsx";
import BeamlineWrapper from "./routes/beamlines/BeamlineWrapper.tsx";
import Devices, {
  loader as DevicesLoader,
} from "./routes/beamlines/devices/Devices.tsx";
import Plans, {
  loader as PlansLoader,
} from "./routes/beamlines/plans/Plans.tsx";
import SpecificPlan, {
  loader as SpecificPlanLoader,
} from "./routes/beamlines/plans/SpecificPlan.tsx";
import Root, { loader as rootLoader } from "./routes/root.tsx";
import BeamlinesListRoute, {
  loader as AllBeamlinesLoader,
} from "./routes/beamlines/BeamlineListRoute.tsx";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "beamlines/",
        element: <BeamlineWrapper />,
        children: [
          {
            path: "list",
            element: <BeamlinesListRoute />,
            loader: AllBeamlinesLoader,
          },
          {
            path: ":beamlineName",
            element: <BeamlinePanel />,
            loader: BeamlineLoader,
          },
          { path: ":beamlineName/synoptic", element: <BeamlinePanel /> },
          { path: ":beamlineName/technical-ui", element: <BeamlinePanel /> },
          { path: ":beamlineName/experiment", element: <BeamlinePanel /> },
          {
            path: ":beamlineName/experiment/:experimentId",
            element: <BeamlinePanel />,
          },
          {
            path: ":beamlineName/devices",
            element: <Devices />,
            loader: DevicesLoader,
          },
          {
            path: ":beamlineName/plans",
            element: <Plans />,
            loader: PlansLoader,
          },
          {
            path: ":beamlineName/plans/:planName",
            element: <SpecificPlan />,
            loader: SpecificPlanLoader,
          },
        ],
      },
      {
        errorElement: <ErrorPage />,
        children: [],
      },
    ],
    loader: rootLoader,
  },
  {
    path: "app",
    element: (
      <div>
        <h1>Hello world</h1>
        {/* <App /> */}
      </div>
    ),
  },
]);

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
