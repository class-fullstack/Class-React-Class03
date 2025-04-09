import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import privateRoutes from "./privateRoutes";
import NotFound from "../pages/404-NotFound";
import PublicLayout from "../components/layout/PublicLayout";
import PrivateLayout from "../components/layout/PrivateLayout";
import ScrollToTop from "../components/ui/ScrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ScrollToTop>
        <PublicLayout />
      </ScrollToTop>
    ),
    children: [...publicRoutes],
  },
  {
    path: "",
    element: (
      <ScrollToTop>
        <PrivateLayout />
      </ScrollToTop>
    ),
    children: [...privateRoutes],
  },
  ,
  { path: "*", element: <NotFound /> },
]);

export default router;
