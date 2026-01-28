import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Post from "./pages/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <Post />,
  }
]);

export default router;