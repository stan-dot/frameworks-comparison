import React from "react";
import EditContact, {action as editAction} from "./routes/edit.tsx";

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
import Contact, { loader as contactLoader } from "./routes/contact.tsx";

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
      },
      {
        path: "contacts/:contactId/edit",
        element:<EditContact/>,
        loader: contactLoader,
        action: editAction
      }
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
