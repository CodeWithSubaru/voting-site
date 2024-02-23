import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/protected/home";
import App from "./App";

export const router = createBrowserRouter([
  {
    index: true,
    Component: App,
  },
  {
    path: "home",
    Component: Home,
  },
]);
