import React from "react";
import { Link } from "react-router-dom";
import product from '../data/product'

function App() {
 
const displayedProducts = product.slice(0, 30);
  return (
    <div className="app">
      <div className="newitem-grid">
        {displayedProducts.map((product) => (
          <div key={product.id} className="newitem-card">
            <div className="newitem-image-placeholder">
              <img
                src={product.image}
                alt={product.name}
                className="newitem-image"
              />
            </div>
            <h3 className="newitem-name">{product.name}</h3>
            <p className="newitem-price">From ₹{product.price}</p>
            <div className="newitem-rating">
              {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
            </div>
            <Link to={`/product/${product.id}`}>
              <button>View Product</button>
            </Link>
          </div>
        ))}
      </div>
      {/* Show More Button */}
      <div className="show-more-container">
        <Link
          to="/p"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <button className="show-more-button">Show More</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
