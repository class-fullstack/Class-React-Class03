import axios from "axios";
import React from "react";

export const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [appliedFilters, setAppliedFilters] = React.useState(null);
  const [visibleCount, setVisibleCount] = React.useState(8);

  const [filters, setFilters] = React.useState({
    category: "",
    minPrice: "",
    maxPrice: "",
    minRating: 0,
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    setAppliedFilters(filters);
    setIsFilterOpen(false);
  };

  const resetFilters = () => {
    setFilters({
      category: "",
      minPrice: "",
      maxPrice: "",
      minRating: 0,
    });
  };

  const loadMoreProducts = () => {
    setVisibleCount((prev) => prev + 8); // Tăng số lượng sản phẩm hiển thị thêm 8
  };

  React.useEffect(() => {
    setProducts([]);
    setIsLoading(true);

    axios
      .get(
        appliedFilters?.category
          ? `https://fakestoreapi.com/products/category/${filters?.category}`
          : `https://fakestoreapi.com/products`
      )
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [appliedFilters]);

  React.useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  ProductContext.displayName = "Products never die";

  const data = {
    products,
    isLoading,
    categories,
    setFilters,
    handleFilterChange,
    applyFilters,
    filters,
    setFilters,
    isFilterOpen,
    setIsFilterOpen,
    resetFilters,
  };

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
