import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";

import { routes } from "./Routes.jsx";
import Project from "./pages/Project.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes,
  },
  {
    path: "/:projectName",
    element: <Project />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
