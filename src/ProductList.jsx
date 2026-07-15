import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

const plantsData = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: 'https://picsum.photos/seed/snakeplant/300/300', cost: 15 },
      { name: 'Spider Plant', image: 'https://picsum.photos/seed/spiderplant/300/300', cost: 12 },
      { name: 'Peace Lily', image: 'https://picsum.photos/seed/peacelily2/300/300', cost: 18 },
      { name: 'Boston Fern', image: 'https://picsum.photos/seed/bostonfern/300/300', cost: 16 },
      { name: 'Aloe Vera', image: 'https://picsum.photos/seed/aloevera2/300/300', cost: 10 },
      { name: 'Rubber Plant', image: 'https://picsum.photos/seed/rubberplant/300/300', cost: 20 },
    ],
  },
  {
    category: 'Flowering Plants',
    plants: [
      { name: 'Orchid', image: 'https://picsum.photos/seed/orchid/300/300', cost: 25 },
      { name: 'African Violet', image: 'https://picsum.photos/seed/africanviolet/300/300', cost: 14 },
      { name: 'Begonia', image: 'https://picsum.photos/seed/begonia/300/300', cost: 13 },
      { name: 'Hibiscus', image: 'https://picsum.photos/seed/hibiscus/300/300', cost: 17 },
      { name: 'Geranium', image: 'https://picsum.photos/seed/geranium/300/300', cost: 11 },
      { name: 'Jasmine', image: 'https://picsum.photos/seed/jasmine/300/300', cost: 19 },
    ],
  },
  {
    category: 'Succulents',
    plants: [
      { name: 'Echeveria', image: 'https://picsum.photos/seed/echeveria/300/300', cost: 9 },
      { name: 'Jade Plant', image: 'https://picsum.photos/seed/jadeplant/300/300', cost: 14 },
      { name: 'Haworthia', image: 'https://picsum.photos/seed/haworthia/300/300', cost: 8 },
      { name: 'Cactus', image: 'https://picsum.photos/seed/cactus/300/300', cost: 7 },
      { name: 'String of Pearls', image: 'https://picsum.photos/seed/stringofpearls/300/300', cost: 15 },
      { name: 'Sedum', image: 'https://picsum.photos/seed/sedum/300/300', cost: 10 },
    ],
  },
];

function ProductList({ onHomeClick, onPlantsClick, onCartClick }) {
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
          <a href="/" onClick={onHomeClick}>Home</a>
          <a href="/" onClick={onPlantsClick}>Plants</a>
          <a href="/" onClick={onCartClick}>Cart</a>
        </div>
        <div className="cart-icon" onClick={onCartClick}>
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
