import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const styles = {
  container: {
    maxWidth: "800px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    background: "#fff",
  },
  image: {
    width: "200px",
    height: "200px",
    objectFit: "contain",
    marginBottom: "15px",
  },
  title: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  price: {
    color: "#007bff",
    fontSize: "20px",
    fontWeight: "bold",
  },
  description: {
    fontSize: "16px",
    marginTop: "15px",
  },
  loading: {
    textAlign: "center",
    fontSize: "20px",
    marginTop: "50px",
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
    return () => {
      setProduct(null);
    };
  }, [id]);

  return (
    <div style={styles.container}>
      {product && (
        <React.Fragment>
          <img src={product.image} alt={product.title} style={styles.image} />
          <h2 style={styles.title}>{product.title}</h2>
          <p style={styles.price}>${product.price}</p>
          <p style={styles.description}>{product.description}</p>
        </React.Fragment>
      )}
    </div>
  );
};

export default ProductDetail;
