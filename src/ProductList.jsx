import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

const plantsData = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: 'https://picsum.photos/seed/snakeplant/300/300', cost: 15 },
      { name: 'Spider Plant', image: 'https://picsum.photos/seed/spiderplant/300/300', cost: 12 },
    ],
  },
  {
    category: 'Flowering Plants',
    plants: [
      { name: 'Peace Lily', image: 'https://picsum.photos/seed/peacelily/300/300', cost: 18 },
      { name: 'Orchid', image: 'https://picsum.photos/seed/orchid/300/300', cost: 25 },
    ],
  },
  {
    category: 'Succulents',
    plants: [
      { name: 'Aloe Vera', image: 'https://picsum.photos/seed/aloevera/300/300', cost: 10 },
      { name: 'Jade Plant', image: 'https://picsum.photos/seed/jadeplant/300/300', cost: 14 },
    ],
  },
];

function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const isInCart = (name) => cartItems.some((item) => item.name === name);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <nav className="navbar">
        <div className="nav-links">
          <span onClick={() => onNavigate('landing')}>Home</span>
          <span onClick={() => onNavigate('products')}>Plants</span>
          <span onClick={() => onNavigate('cart')}>Cart</span>
        </div>
        <div className="cart-icon" onClick={() => onNavigate('cart')}>
          🛒 {totalQuantity}
        </div>
      </nav>

      <div className="product-list-container">
        {plantsData.map((cat) => (
          <div className="category" key={cat.category}>
            <h2>{cat.category}</h2>
            <div className="products-grid">
              {cat.plants.map((plant) => (
                <div className="product-card" key={plant.name}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.cost}</p>
                  <button
                    className="add-to-cart-btn"
                    disabled={isInCart(plant.name)}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {isInCart(plant.name) ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;