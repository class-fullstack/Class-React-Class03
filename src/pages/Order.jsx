import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  CheckCircleIcon,
  ArrowLeftIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import useCart from "../components/hooks/useCart";
import "../styles/order.css";
import Fireworks from "../components/ui/Fireworks";

const OrderSuccess = () => {
  const { clearCart } = useCart();
  const location = useLocation();

  const orderDetails = location.state?.orderDetails || {
    orderId: `#${Math.floor(Math.random() * 1000000)}`,
    totalItems: 0,
    totalAmount: 0,
  };

  React.useEffect(() => {
    clearCart();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="order-success-container"
    >
      <div className="order-success-card">
        <Fireworks />
        <CheckCircleIcon className="success-icon" />
        <h1 className="success-title">Order Confirmed!</h1>
        <p className="success-subtitle">Thank you for your purchase</p>

        <div className="order-details">
          <div className="detail-item">
            <span className="detail-label">Order ID:</span>
            <span className="detail-value">{orderDetails.orderId}</span>
          </div>
        </div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/" className="continue-shopping-btn">
            <ArrowLeftIcon className="btn-icon" />
            Continue Shopping
          </Link>
        </motion.div>

        <div className="order-footer">
          <ShoppingBagIcon className="footer-icon" />
          <p className="footer-text">
            Your order will be processed within 24 hours.
            <br />
            We'll send you a confirmation email shortly.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderSuccess;
