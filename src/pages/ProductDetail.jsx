import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import { ShoppingCartIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "../styles/product.css";
import LoadingSpinner from "../components/ui/LoadingSpinner";
const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setIsLoading(false);
        setProduct(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching product:", error);
      });
    return () => {
      setProduct(null);
    };
  }, [id]);

  return (
    <div className="container">
      <div className="product-detail-container">
        <button onClick={() => navigate(-1)} className="back-button">
          <ArrowLeftIcon className="icon-sm" />
          Back to Products
        </button>

        {isLoading && <LoadingSpinner />}
        {product && (
          <div className="product-detail-content">
            <div className="image-section">
              <div className="product-image-wrapper">
                <Zoom
                  zoomMargin={20} // Khoảng cách giữa ảnh phóng to và viền màn hình
                  overlayBgColorStart="rgba(0,0,0,0.5)" // Màu nền khi zoom bắt đầu
                  overlayBgColorEnd="rgba(0,0,0,0.8)" // Màu nền khi zoom kết thúc
                  transitionDuration={300} // Thời gian hiệu ứng zoom (ms)
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="detail-image"
                  />
                </Zoom>
                <div className="category-tag">{product.category}</div>
              </div>
            </div>

            <div className="product-detail-info">
              <div className="product-header">
                <h1 className="product-title-detail">{product.title}</h1>
                <div className="price-rating">
                  <p className="price">{product.price.toFixed(2)}</p>
                  <div className="rating">
                    <span className="rating-stars">
                      {"★".repeat(Math.floor(product.rating.rate))}
                      {"☆".repeat(5 - Math.floor(product.rating.rate))}
                    </span>
                    <span>({product.rating.count} reviews)</span>
                  </div>
                </div>
              </div>

              <div className="product-description">
                <h3 className="section-title">Product Description</h3>
                <p>{product.description}</p>
              </div>

              <div className="action-buttons">
                <button className="btn btn-primary btn-lg">
                  <ShoppingCartIcon className="icon-md" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
