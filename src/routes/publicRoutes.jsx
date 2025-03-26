import Products from "../pages/Products";
import Contact from "../pages/Contact";
import About from "../pages/About";
import ProductDetail from "../pages/ProductDetail";

const publicRoutes = [
  {
    index: true,
    element: <Products />,
  },
  {
    path: "products/:id/:slug",
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
