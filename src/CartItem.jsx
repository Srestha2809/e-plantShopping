import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce((sum, item) => sum + item.quantity * item.cost, 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleDelete = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    alert('Coming Soon!');
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

      <div className="cart-container">
        <div className="cart-summary">
          <p>Total items in cart: {totalQuantity}</p>
          <p>Total cost: ${totalAmount.toFixed(2)}</p>
        </div>

        {cartItems.length === 0 && <p>Your cart is empty.</p>}

        {cartItems.map((item) => (
          <div className="cart-item" key={item.name}>
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Unit price: ${item.cost}</p>
              <p>Subtotal: ${(item.cost * item.quantity).toFixed(2)}</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)}>+</button>
              </div>
            </div>
            <button className="delete-btn" onClick={() => handleDelete(item)}>Delete</button>
          </div>
        ))}

        <div className="cart-actions">
          <button className="continue-btn" onClick={() => onNavigate('products')}>Continue Shopping</button>
          <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;