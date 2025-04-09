import React from "react";
import "../../styles/loadmore.css";

const LoadMore = ({
  onClick,
  loading = false,
  hasMore = true,
  loadingText = "Đang tải...",
  buttonText = "Xem thêm sản phẩm",
}) => {
  if (!hasMore) return null;

  return (
    <div className="load-more-container">
      <button
        className={`load-more-button ${loading ? "loading" : ""}`}
        onClick={onClick}
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="loading-spinner"></span>
            <span>{loadingText}</span>
          </>
        ) : (
          <span>{buttonText}</span>
        )}
      </button>
    </div>
  );
};

export default LoadMore;
