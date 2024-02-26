import React from "react";
import EditContact, { action as editAction } from "./routes/contacts/edit.tsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import ErrorPage from "./error-page.tsx";
import "./index.css";
import Contact, {
  action as contactAction,
  loader as contactLoader,
} from "./routes/contacts/contact.tsx";
import DeleteContact, { action as deleteAction } from "./routes/contacts/destroy.tsx";
import Index from "./routes/index.tsx";
import MultipleComponentScreen from "./routes/multiple-component-screen.tsx";
import Root, {
  action as rootAction,
  loader as rootLoader,
} from "./routes/root.tsx";

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
        path: "contacts/:contactId/edit",
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
