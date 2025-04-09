import React from "react";
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import useProducts from "../../components/hooks/useProduct";

import "../../styles/search-filter.css";

const SearchAndFilter = () => {
  const {
    categories,
    handleFilterChange,
    applyFilters,
    filters,
    setFilters,
    isFilterOpen,
    setIsFilterOpen,
    resetFilters,
  } = useProducts();
  const [searchTerm, setSearchTerm] = React.useState("");
  const searchInputRef = React.useRef(null);

  React.useEffect(() => {
    const delaySearch = setTimeout(() => {
      console.log("Searching for:", searchTerm);
    }, 500);
    return () => clearTimeout(delaySearch);
  }, [searchTerm]);

  React.useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  return (
    <div className="search-filter-container">
      <div className="search-bar">
        <MagnifyingGlassIcon className="search-icon" />
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          ref={searchInputRef}
        />
        {searchTerm && (
          <XMarkIcon
            className="clear-search-icon"
            onClick={() => setSearchTerm("")}
          />
        )}
      </div>

      <button
        className="filter-button"
        onClick={() => setIsFilterOpen(!isFilterOpen)}
      >
        <FunnelIcon className="filter-icon" />
        <span>Lọc</span>
      </button>

      {isFilterOpen && (
        <div className="filter-panel">
          <div className="filter-header">
            <h3>Bộ lọc sản phẩm</h3>
            <XMarkIcon
              className="close-filter-icon"
              onClick={() => setIsFilterOpen(false)}
            />
          </div>

          <div className="filter-group">
            <label>Danh mục:</label>

            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="filter-select"
            >
              <option value="">Tất cả danh mục</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Giá (USD):</label>
            <div className="price-inputs">
              <input
                type="number"
                name="minPrice"
                placeholder="Giá thấp nhất"
                value={filters.minPrice}
                onChange={handleFilterChange}
                className="price-input"
              />
              <span>-</span>
              <input
                type="number"
                name="maxPrice"
                placeholder="Giá cao nhất"
                value={filters.maxPrice}
                onChange={handleFilterChange}
                className="price-input"
              />
            </div>
          </div>

          <div className="filter-group">
            <label>Đánh giá tối thiểu:</label>
            <div className="rating-selector">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${
                    star <= filters.minRating ? "active" : ""
                  }`}
                  onClick={() =>
                    setFilters((prev) => ({ ...prev, minRating: star }))
                  }
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="filter-actions">
            <button className="btn btn-secondary" onClick={resetFilters}>
              Đặt lại
            </button>
            <button className="btn btn-primary" onClick={applyFilters}>
              Áp dụng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAndFilter;
