import React from "react";

const spinnerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100px",
};

const circleStyle = {
  width: "40px",
  height: "40px",
  border: "4px solid rgba(0, 123, 255, 0.3)",
  borderTop: "4px solid #007bff",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

const LoadingSpinner = () => {
  return (
    <div style={spinnerStyle}>
      <div style={circleStyle}></div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingSpinner;
