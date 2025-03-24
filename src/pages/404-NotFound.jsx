import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ fontSize: "3rem", color: "#ff4757" }}>404</h1>
      <h2>Trang không tồn tại</h2>
      <p>Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
      <Link
        to="/"
        style={{ textDecoration: "none", color: "#007bff", fontWeight: "bold" }}
      >
        Quay về trang chủ
      </Link>
    </div>
  );
};

export default NotFound;
