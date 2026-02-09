import { createBrowserRouter } from "react-router";
import Frontend from "./layouts/Frontend";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Frontend />,
    children:[
      {
        path: "/",
        element: <Home />
      }
    ]
  },
]);

export default router;