import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

import "../../styles/header.css";

// Header Component
const Header = ({ cartCount }) => {
  return (
    <header className="header-container">
      <nav className="header-content">
        <div className="brand-logo">
          <ShoppingBagIcon className="icon-md text-primary" />
          <span className="brand-name">Class 03</span>
        </div>

        <div className="nav-links">
          <NavLink to="/products" className="nav-link">
            Products
          </NavLink>
          <NavLink to="/cart" className="nav-link">
            Cart
          </NavLink>
          <NavLink to="/orders" className="nav-link">
            Orders
          </NavLink>

          <div className="cart-indicator">
            <ShoppingCartIcon className="icon-md" />
            <span className="cart-badge">{cartCount || 0}</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
