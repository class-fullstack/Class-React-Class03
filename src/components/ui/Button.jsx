import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}) => {
  const styles = {
    base: {
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "5px",
      border: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "all 0.3s ease",
      display: "inline-block",
      textAlign: "center",
      fontWeight: "bold",
    },
    primary: {
      background: "#007bff",
      color: "#fff",
    },
    secondary: {
      background: "#6c757d",
      color: "#fff",
    },
    danger: {
      background: "#dc3545",
      color: "#fff",
    },
    success: {
      background: "#28a745",
      color: "#fff",
    },
    disabled: {
      background: "#ccc",
      color: "#666",
      cursor: "not-allowed",
    },
  };

  const buttonStyle = {
    ...styles.base,
    ...(disabled ? styles.disabled : styles[variant] || styles.primary),
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
