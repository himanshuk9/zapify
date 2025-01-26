import React from 'react';
import { Link } from "react-router-dom";
import { FiArrowRight } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="content">
        <p className="tagline">TRENDING COLLECTION ⚡</p>
        <h1>Explore Winter Collection</h1>
        <p className="description">
          We design pieces of furniture and objects that perfectly gap between functionality and beauty.
        </p>
        <div className="actions">
          <Link to="/p">
           <button className="shop-btn" >Shop Now <FiArrowRight /> </button>
          </Link>
          
          <button className="video-btn" > Learn More  </button>
        </div>
      </div>
      <div className="image-container">
        <img src="/wbs.jpg" alt="Winter Collection" />
      </div>
    </section>
  );
};

export default HeroSection;
