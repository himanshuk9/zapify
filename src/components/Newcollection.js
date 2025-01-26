import React from "react";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      img: "https://i.pinimg.com/originals/83/6f/7a/836f7ad1879802f755faeaa7f2fd1e70.png",
      price: 280,
      isSale: true,
    },
    {
      id: 2,
      img: "https://www.pngplay.com/wp-content/uploads/15/Denim-Jacket-Transparent-Free-PNG.png",
      price: 300,
      isSale: false,
    },
    {
      id: 3,
      img: "http://clipart-library.com/images_k/jacket-transparent-background/jacket-transparent-background-23.png",
      price: 350,
      isSale: false,
    },
    {
      id: 4,
      img: "https://www.pngplay.com/wp-content/uploads/4/Jacket-PNG-Pic-Background.png",
      price: 400,
      isSale: false,
    },
  ];

  return (
    <div className="product-section">
      <h2>New Brands</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            {product.isSale && <span className="sale-badge">Sale</span>}
            <div className="product-image">
              <img src={product.img} alt={`Product ${product.id}`} />
            </div>
            <p className="product-price">Price {product.price}</p>
            <button className="buy-now">Buy now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
