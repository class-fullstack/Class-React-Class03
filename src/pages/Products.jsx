import React from "react";
import {
  ShoppingCartIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import useProducts from "../components/hooks/useProduct";
import { generateSlug } from "../components/utils/slugUtils";
import "../styles/products.css";
import { truncateTitle } from "../components/utils/convertText";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const Products = () => {
  const { products, isLoading } = useProducts();
  return (
    <React.Fragment>
      <div className="container">
        {isLoading && <LoadingSpinner />}
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
                <div className="category-tag">{product.category}</div>
              </div>

              <div className="product-info">
                <h3 className="product-title">
                  {truncateTitle(product.title, 23)}
                </h3>

                <div className="price-rating">
                  <p className="price">{product.price.toFixed(2)}</p>
                  <div className="rating">
                    <span className="rating-stars">
                      {"★".repeat(Math.floor(product.rating.rate))}
                      {"☆".repeat(5 - Math.floor(product.rating.rate))}
                    </span>
                    <span>({product.rating.count})</span>
                  </div>
                </div>
                <div className="button-group">
                  <button className="btn btn-primary">
                    <ShoppingCartIcon
                      style={{ width: "20px", marginRight: "8px" }}
                    />
                    Add
                  </button>
                  <Link
                    to={`/products/${product.id}/${generateSlug(
                      product.title
                    )}`}
                    className="btn btn-secondary"
                  >
                    <InformationCircleIcon
                      style={{ width: "20px", marginRight: "8px" }}
                    />
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Products;
