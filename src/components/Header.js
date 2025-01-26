import React, { useState } from "react";
import { Link } from "react-router-dom";

const SecondNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="ndnavbar">
      <div className="ndnavbar-container">
        {/* Website Name */}
        <div className="ndnavbar-brand">
          <a href="/">Zapify</a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button className="ndnavbar-toggler" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </button>

        {/* Navigation Links */}
        <ul className={`ndnavbar-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/p">Gallery</a>
          </li>
          <li>
            <a href="/subscribe">Contact</a>
          </li>
          <li>
            {/* Add to Cart Link */}
            <Link to="/cart" className="ndcart-link">
              <i className="fa fa-shopping-cart"></i> Cart
            </Link>
          </li>
          <li>
            <a href="#like">
              <i className="fa fa-heart"></i> Wishlist
            </a>
          </li>
          {/* Login and Signup Links */}
          <li>
            <a href="/login" className="ndlogin-link">
              <i className="fa fa-sign-in"></i> Login
            </a>
          </li>
          <li>
            <a href="/register" className="ndsignup-link">
              <i className="fa fa-user-plus"></i> Sign Up
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default SecondNavbar;
