import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  TrashIcon,
  PlusCircleIcon,
  MinusCircleIcon,
  ArrowLeftIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import emptyCartImage from "../assets/images/cart-empty.png";
import master from "../assets/svgs/master.svg";
import visa from "../assets/svgs/visa.svg";
import paypal from "../assets/svgs/paypal.svg";

import "../styles/cart.css";
import useCart from "../components/hooks/useCart";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const Cart = () => {
  const [isLoading, setLoading] = React.useState(false);
  const { cartItems, removeFromCart, increment, decrement } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: -50 },
  };

  const handleOrder = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/orders");
    }, 4000);
  };

  return (
    <div className="cart-page">
      <header className="cart-header">
        <button
          onClick={() => navigate("/")}
          className="back-button cart-back-btn"
        >
          <ArrowLeftIcon className="icon-md" />
          Back
        </button>
        <h1 className="cart-main-title">Your Shopping Cart</h1>
        <div className="cart-stats">
          {cartItems.cart.length} ITEM{cartItems.cart.length !== 1 && "S"}
        </div>
      </header>

      <AnimatePresence>
        {cartItems?.cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="cart-empty-state"
          >
            <img
              src={emptyCartImage}
              alt="Empty shopping cart"
              className="cart-empty-image"
              draggable="false"
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/" className="cart-continue-btn">
                Explore Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="cart-arrow-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </motion.div>
            <p className="cart-empty-subtext">Add items to get started</p>
          </motion.div>
        ) : (
          <div className="cart-content">
            {/* Cart Items List */}
            <section className="cart-items-list">
              <AnimatePresence>
                {cartItems.cart.map((item) => (
                  <motion.article
                    key={item.id}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="cart-item-card"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="cart-item-image">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="cart-product-image"
                      />
                    </div>

                    <div className="cart-item-details">
                      <div className="cart-item-header">
                        <h3 className="cart-item-title">
                          <Link to={`/products/${item.id}`}>{item.title}</Link>
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="cart-remove-btn"
                          aria-label="Remove item"
                        >
                          <TrashIcon className="cart-remove-icon" />
                          <span className="cart-remove-text">Remove</span>
                        </button>
                      </div>

                      <div className="cart-item-meta">
                        <span className="cart-item-sku">SKU: {item.id}</span>
                        <div className="cart-rating-badge">
                          ★ {item.rating.rate} ({item.rating.count})
                        </div>
                      </div>

                      <div className="cart-quantity-controls">
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => decrement(item.id)}
                          disabled={item.quantity <= 1}
                          className={`cart-qty-btn ${
                            item.quantity <= 1 ? "disabled" : ""
                          }`}
                          aria-label="Decrease quantity"
                        >
                          <MinusCircleIcon className="cart-icon-sm" />
                        </motion.button>
                        <span className="cart-qty-value">{item.quantity}</span>
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => increment(item.id)}
                          className="cart-qty-btn"
                          aria-label="Increase quantity"
                        >
                          <PlusCircleIcon className="cart-icon-sm" />
                        </motion.button>
                      </div>

                      <div className="cart-price-wrapper">
                        <span className="cart-total-price">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        {item.quantity > 1 && (
                          <span className="cart-unit-price">
                            (${item.price.toFixed(2)}/each)
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </section>

            {/* Order Summary */}
            <aside className="cart-summary-section">
              <div className="cart-summary-card">
                <h2 className="cart-summary-title">
                  <BanknotesIcon className="cart-summary-icon" />
                  Order Summary
                </h2>

                <div className="cart-summary-grid">
                  <div className="cart-summary-row">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="cart-summary-row">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? "cart-free" : ""}>
                      {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="cart-summary-row">
                    <span>Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="cart-progress-bar">
                  <div
                    className="cart-progress-fill"
                    style={{ width: `${Math.min(subtotal, 100)}%` }}
                  ></div>
                  <span className="cart-progress-text">
                    {subtotal >= 100
                      ? "🎉 You earned free shipping!"
                      : `$${100 - subtotal} to free shipping`}
                  </span>
                </div>

                <div className="cart-summary-total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                {isLoading ? (
                  <LoadingSpinner />
                ) : (
                  <motion.button
                    className="cart-checkout-btn"
                    whileHover={{ scale: 1.02 }}
                    onClick={handleOrder}
                    whileTap={{ scale: 0.98 }}
                  >
                    Checkout
                  </motion.button>
                )}

                <div className="cart-payment-methods">
                  <img src={visa} alt="Visa" className="cart-payment-logo" />
                  <img
                    src={master}
                    alt="Mastercard"
                    className="cart-payment-logo"
                  />
                  <img
                    src={paypal}
                    alt="PayPal"
                    className="cart-payment-logo"
                  />
                </div>
              </div>
            </aside>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cart;
