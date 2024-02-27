import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import ErrorPage from "./error-page.tsx";
import "./index.css";
import Contact, {
  action as contactAction,
  loader as contactLoader,
} from "./routes/contacts/contact.tsx";
import DeleteContact, {
  action as deleteAction,
} from "./routes/contacts/destroy.tsx";
import EditContact, { action as editAction } from "./routes/contacts/edit.tsx";
import MultipleComponentScreen from "./routes/multiple-component-screen.tsx";
import Root, {
  action as rootAction,
  loader as rootLoader,
} from "./routes/root.tsx";
import ContactsRoot from "./routes/contacts/contacts-root.tsx";
import Devices, {
  loader as DevicesLoader,
} from "./routes/beamlines/devices/Devices.tsx";
import Plans, {
  loader as PlansLoader,
} from "./routes/beamlines/plans/Plans.tsx";
import SpecificPlan, {
  loader as SpecificPlanLoader,
} from "./routes/beamlines/plans/SpecificPlan.tsx";
import BeamlinesList, {
  loader as BeamlinesListLoader,
} from "./routes/beamlines/BeamlinesList.tsx";
import BeamlinePanel, {
  loader as BeamlineLoader,
} from "./routes/beamlines/BeamlinePanel.tsx";

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
        path: "contacts/",
        element: <ContactsRoot />,
        children: [
          {
            path: ":contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },

          {
            path: ":contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: ":contactId/destroy",
            element: <DeleteContact />,
            loader: contactLoader,
            action: deleteAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      },

      {
        path: "beamlines/",
        element: <BeamlinesList />,
        loader: BeamlinesListLoader,
        children: [
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
        path: "multiple-component-screen",
        element: <MultipleComponentScreen />,
      },
      {
        path: "single-component-screen/:componentId",
        element: <MultipleComponentScreen />,
      },
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
        ],
      },
    ],
    loader: rootLoader,
    action: rootAction,
  },
  {
    path: "app",
    element: (
      <div>
        <h1>Hello world</h1>
        <App />
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
