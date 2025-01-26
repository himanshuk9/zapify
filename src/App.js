import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Allproduct from './components/Allproduct';
import ProductDetail from './components/Productdetails';
import Register from './components/Register';
import Login from './components/Login';
import Scroll from './components/Scroll';
import Tophome from './components/Tophome';
import Cart from './components/Cart';
import Intro from './components/Intro'
import Contact from './components/Contact';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // Update quantity if item already in cart
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      // Add new item to cart
      return [...prevCart, { ...product, quantity }];
    });
  };

  return (
    <>
      <Tophome />
      <Header cart={cart} />
      <Scroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/p" element={<Allproduct />} />
        <Route path="/about" element={<Intro />} />

        
        {/* Pass addToCart function using element */}
        <Route
          path="/product/:id"
          element={<ProductDetail addToCart={addToCart} />}
        />
        <Route path="/subscribe" element={<Contact />} />
        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
