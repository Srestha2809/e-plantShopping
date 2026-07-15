import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <div>
      {currentPage === 'landing' && (
        <div className="landing-page">
          <div className="landing-content">
            <h1 className="company-name">Paradise Nursery</h1>
            <AboutUs />
            <button className="get-started-button" onClick={() => setCurrentPage('products')}>
              Get Started
            </button>
          </div>
        </div>
      )}
      {currentPage === 'products' && <ProductList onNavigate={setCurrentPage} />}
      {currentPage === 'cart' && <CartItem onNavigate={setCurrentPage} />}
    </div>
  );
}

export default App;