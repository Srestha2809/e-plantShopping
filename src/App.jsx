import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = (e) => {
    if (e) e.preventDefault();
    setShowProductList(false);
    setShowCart(false);
  };

  const handlePlantsClick = (e) => {
    if (e) e.preventDefault();
    setShowProductList(true);
    setShowCart(false);
  };

  const handleCartClick = (e) => {
    if (e) e.preventDefault();
    setShowCart(true);
    setShowProductList(false);
  };

  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    setShowCart(false);
    setShowProductList(true);
  };

  return (
    <div>
      {!showProductList && !showCart && (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="landing-content">
            <h1 className="company-name">Paradise Nursery</h1>
            <AboutUs />
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
        </div>
      )}
      {showProductList && !showCart && (
        <ProductList
          onHomeClick={handleHomeClick}
          onPlantsClick={handlePlantsClick}
          onCartClick={handleCartClick}
        />
      )}
      {showCart && (
        <CartItem
          onHomeClick={handleHomeClick}
          onPlantsClick={handlePlantsClick}
          onContinueShopping={handleContinueShopping}
        />
      )}
    </div>
  );
}

export default App;
