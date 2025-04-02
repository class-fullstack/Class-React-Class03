import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingCartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

import "../../styles/header.css";
import useCart from "../hooks/useCart";

// Header Component
const Header = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  return (
    <header className="header-container">
      <nav className="header-content">
        <div className="brand-logo">
          <ShoppingBagIcon
            className="icon-md text-primary"
            onClick={() => navigate("/")}
          />
          <span className="brand-name" onClick={() => navigate("/")}>
            Class 03
          </span>
        </div>

        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Products
          </NavLink>
          <NavLink to="/cart" className="nav-link">
            Cart
          </NavLink>
          <NavLink to="/orders" className="nav-link">
            Orders
          </NavLink>

          <div className="cart-indicator">
            <ShoppingCartIcon
              className="icon-md"
              onClick={() => navigate("/cart")}
            />
            <span className="cart-badge">{cartItems?.cart?.length || 0}</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
