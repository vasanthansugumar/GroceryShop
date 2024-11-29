import React, { useState } from 'react';

function Home({ products, addToCart, searchQuery, setSearchQuery }) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleAddToCart = (product) => {
    addToCart(product);
    setPopupMessage(`${product.name} added to cart!`);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000); // Hide the popup after 3 seconds
  };

  return (
    <div className="home">
      <h1>Welcome to the Online Grocery Shop</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {showPopup && (
        <div className="popup">
          {popupMessage}
        </div>
      )}
      <div className="products">
        <h2>Products</h2>
        <ul>
          {products.map(product => (
            <li key={product.id} className="product-item">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-details">
                <span>{product.name}</span>
                <span>${product.price.toFixed(2)}</span>
              </div>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
