import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import privateRoutes from "./privateRoutes";
import NotFound from "../pages/404-NotFound";
import PublicLayout from "../components/layout/PublicLayout";
import PrivateLayout from "../components/layout/PrivateLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [...publicRoutes],
  },
  {
    path: "",
    element: <PrivateLayout />,
    children: [...privateRoutes],
  },
  ,
  { path: "*", element: <NotFound /> },
]);

export default router;
