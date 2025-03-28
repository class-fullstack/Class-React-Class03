import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { generateSlug } from "../components/utils/slugUtils";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import useProducts from "../components/hooks/useProduct";

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
  },
  title: {
    fontSize: "16px",
    margin: "10px 0",
  },
  price: {
    color: "#007bff",
    fontWeight: "bold",
  },
  loading: {
    textAlign: "center",
    fontSize: "20px",
    marginTop: "50px",
  },
};

const Products = () => {
  const { products, isLoading } = useProducts();
  return (
    <React.Fragment>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div style={styles.container}>
          {products.map((product) => (
            <div key={product.id} style={styles.card}>
              <Link
                to={`/products/${product.id}/${generateSlug(product.title)}`}
                style={{ textDecoration: "none" }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={styles.image}
                />
                <h3 style={styles.title}>{product.title}</h3>
                <p style={styles.price}>${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default Products;
