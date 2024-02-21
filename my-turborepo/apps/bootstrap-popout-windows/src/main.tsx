import React from "react";
import EditContact, { action as editAction } from "./routes/edit.tsx";

import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root.tsx";
import ErrorPage from "./error-page.tsx";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact.tsx";
import DeleteContact, { action as deleteAction } from "./routes/destroy.tsx";
import Index from "./routes/index.tsx";
import MultipleComponentScreen from "./routes/multiple-component-screen.tsx";

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
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        action: contactAction,
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
        path: "contacts/:contactid/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        element: <DeleteContact />,
        loader: contactLoader,
        action: deleteAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
        ],
      },
      {
        index: true,
        element: <Index />,
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
