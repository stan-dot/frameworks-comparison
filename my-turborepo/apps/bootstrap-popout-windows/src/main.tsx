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
