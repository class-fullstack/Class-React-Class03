import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";

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
    path: "/cart",
    element: <Cart />,
  },
];

export default publicRoutes;
