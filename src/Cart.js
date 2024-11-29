import React from 'react';

function Cart({ cart, onBackToHome, removeFromCart, updateQuantity }) {
  // Calculate the total price of the entire cart
  const totalCartPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <span className="item-name">{item.name} - ${item.price.toFixed(2)}</span>
                <span className="item-quantity">
                  <button onClick={() => updateQuantity(index, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
                </span>
                <span className="item-total">${(item.price * item.quantity).toFixed(2)}</span>
                <button className="remove-button" onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total: ${totalCartPrice.toFixed(2)}</h3>
          </div>
        </div>
      )}
      <button onClick={onBackToHome}>Back to Home</button>
    </div>
  );
}

export default Cart;
