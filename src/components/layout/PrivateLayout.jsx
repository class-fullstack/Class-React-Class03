import React from "react";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default PrivateLayout;
