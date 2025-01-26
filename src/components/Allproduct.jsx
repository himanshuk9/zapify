import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/product";
import { Link } from "react-router-dom";

function AllProduct() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="all-products-page">
      {/* Sticky Home Button and Search Bar */}
      <div className="top-bar-sticky">
        <button className="all-home-button" onClick={() => navigate("/")}>
          <i className="fa-solid fa-angles-left fa-lg"></i> Home
        </button>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
         <button class="btn btn-dark d-inline-flex align-items-center">
  <i class="fa-solid fa-search" style={{ marginRight: '8px' }}> </i>   Search
</button>

        </div>
      </div>

      {/* Heading */}
      <h2>All Products</h2>

      {/* Products Grid */}
      <div className="all-products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="all-product-card">
              <img src={product.image} alt={product.name} />
              <h5>{product.name}</h5>
              <p>From ₹{product.price}</p>
              <p className="starts">{"★".repeat(product.rating)}</p>
              <Link to={`/product/${product.id}` }>
                <button>View Product</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default AllProduct;
