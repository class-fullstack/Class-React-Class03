import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const PrivateLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default PrivateLayout;
