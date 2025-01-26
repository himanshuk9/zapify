import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/product"; // Assuming you have this data

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
      <p>
        Availability: <span style={{ color: "green" }}>In stock</span>
      </p>
      <p>Rating: {product.rating} stars</p>

      {/* Quantity Selector */}
      <div className="quantity-container">
        <label>Quantity:</label>
        <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
      </div>

      {/* Add to Cart Button */}
      <button
        className="add-to-cart-btn"
        onClick={() => addToCart(product, quantity)}
      >
        Add to Cart
      </button>

      {/* Buy Now Button */}
      <button className="buy-now-btn">Buy Now</button>

      {/* Navigation Links */}
      <div className="product-navigation-links">
        <Link to="/" className="nav-home-link">Home</Link>
        <Link to="/p" className="nav-back-link">Back</Link>
      </div>
    </div>
  );
};

export default ProductDetail;
