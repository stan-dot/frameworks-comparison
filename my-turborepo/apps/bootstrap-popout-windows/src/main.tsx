import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page.tsx";
import "./index.css";
import BeamlinesListRoute, {
  loader as AllBeamlinesLoader,
} from "./routes/beamlines/BeamlineListRoute.tsx";
import BeamlinePanel, {
  loader as BeamlineLoader,
} from "./routes/beamlines/BeamlinePanel.tsx";
import BeamlineWrapper from "./routes/beamlines/BeamlineWrapper.tsx";
import Devices, {
  loader as DevicesLoader,
} from "./routes/beamlines/devices/Devices.tsx";
import ExperimentPanel from "./routes/beamlines/experiments/ExperimentPanel.tsx";
import Plans, {
  loader as PlansLoader,
} from "./routes/beamlines/plans/Plans.tsx";
import SpecificPlan, {
  loader as SpecificPlanLoader,
} from "./routes/beamlines/plans/SpecificPlan.tsx";
import Synoptics from "./routes/beamlines/synoptic/Synoptics.tsx";
import TechnicalUi from "./routes/beamlines/technical-ui/TechnicalUi.tsx";
import Root, { loader as rootLoader } from "./routes/root.tsx";

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
          { path: ":beamlineName/synoptic", element: <Synoptics /> },
          { path: ":beamlineName/technical-ui", element: <TechnicalUi /> },
          { path: ":beamlineName/experiments", element: <ExperimentPanel /> },
          {
            path: ":beamlineName/experiments/:experimentId",
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
