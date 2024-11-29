import React from 'react';
import './Navbar.css'; // Optional: add CSS for styling

function Navbar({ onNavigate, onLogout }) {
  return (
    <nav className="navbar">
      <button onClick={() => onNavigate('home')}>Home</button>
      <button onClick={() => onNavigate('cart')}>Cart</button>
      <button onClick={() => onNavigate('profile')}>Profile</button>
      {onLogout && <button onClick={onLogout}>Logout</button>}
    </nav>
  );
}

export default Navbar;


