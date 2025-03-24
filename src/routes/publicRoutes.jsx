import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import ProductDetail from "../pages/ProductDetail";

const publicRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "products/:id",
    element: <ProductDetail />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export default publicRoutes;
