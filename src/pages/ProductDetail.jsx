import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import Button from "../components/ui/Button";

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
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    background: "#007bff",
    color: "#fff",
  },
};

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
    <div style={styles.container}>
      {isLoading && <LoadingSpinner />}
      {product && (
        <React.Fragment>
          <img src={product.image} alt={product.title} style={styles.image} />
          <h2 style={styles.title}>{product.title}</h2>
          <p style={styles.price}>${product.price}</p>
          <p style={styles.description}>{product.description}</p>
          {/* <button style={styles.button} onClick={}>
            ⬅ Quay lại
          </button> */}
          <Button onClick={() => navigate(-1)}>⬅ Quay lại</Button>
        </React.Fragment>
      )}
    </div>
  );
};

export default ProductDetail;
