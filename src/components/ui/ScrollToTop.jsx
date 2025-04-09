import React from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0); // Cuộn lên đầu trang
  }, [pathname]); // Chạy mỗi khi đường dẫn thay đổi

  return children; // Render các phần tử con
};

export default ScrollToTop;
