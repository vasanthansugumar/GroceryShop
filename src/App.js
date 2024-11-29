
// import React, { useState } from 'react';
// import './app.css';
// import Home from './Home';
// import Login from './Login';
// import Cart from './Cart';
// import Navbar from './Navbar';
// import Profile from './Profile';

// function App() {
//   const [page, setPage] = useState('register');
//   const [registeredUser, setRegisteredUser] = useState(null);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [cart, setCart] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   const products = [
//     { id: 1, name: 'Apples', price: 1.99, image: './src/Images/Apple.jpeg' },
//     { id: 2, name: 'Bananas', price: 0.99, image: 'https://via.placeholder.com/100?text=Bananas' },
//     { id: 3, name: 'Carrots', price: 2.49, image: 'https://via.placeholder.com/100?text=Carrots' },
//     { id: 4, name: 'Tomatoes', price: 3.99, image: 'https://via.placeholder.com/100?text=Tomatoes' }
//   ];

//   const filteredProducts = products.filter(product =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleRegister = () => {
//     setRegisteredUser({ username, password });
//     setPage('login');
//   };

//   const handleLogin = (username, password) => {
//     if (username === registeredUser.username && password === registeredUser.password) {
//       setPage('home');
//     } else {
//       alert('Invalid username or password');
//     }
//   };

//   const addToCart = (product) => {
//     const existingProduct = cart.find(item => item.id === product.id);
//     if (existingProduct) {
//       setCart(cart.map(item =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       ));
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = (index) => {
//     const newCart = [...cart];
//     newCart.splice(index, 1);
//     setCart(newCart);
//   };

//   const updateQuantity = (index, newQuantity) => {
//     if (newQuantity < 1) return;
//     const newCart = [...cart];
//     newCart[index].quantity = newQuantity;
//     setCart(newCart);
//   };

//   const handleLogout = () => {
//     setPage('login');
//     setCart([]);
//   };

//   const handleNavigation = (page) => {
//     setPage(page);
//   };

//   return (
//     <div className="app">
//       {(page === 'home' || page === 'cart' || page === 'profile') && (
//         <Navbar 
//           onNavigate={handleNavigation} 
//           onLogout={page === 'home' ? handleLogout : null} 
//         />
//       )}

//       {page === 'register' && (
//         <div className="register">
//           <h2>Register</h2>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <br /><br />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <br /><br />
//           <button onClick={handleRegister}>Register</button>
//         </div>
//       )}

//       {page === 'login' && (
//         <Login onLogin={handleLogin} />
//       )}

//       {page === 'home' && (
//         <Home
//           products={filteredProducts}
//           addToCart={addToCart}
//           searchQuery={searchQuery}
//           setSearchQuery={setSearchQuery}
//         />
//       )}

//       {page === 'cart' && (
//         <Cart
//           cart={cart}
//           onBackToHome={() => setPage('home')}
//           removeFromCart={removeFromCart}
//           updateQuantity={updateQuantity}
//         />
//       )}

//       {page === 'profile' && (
//         <Profile user={registeredUser} />
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './app.css';
import Home from './Home';
import Login from './Login';
import Cart from './Cart';
import Navbar from './Navbar';
import Profile from './Profile';
import Register from './Register';

function App() {
  const [page, setPage] = useState('register');
  const [registeredUser, setRegisteredUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample products (replace this with actual product data)
  const products = [
    { id: 1, name: 'Apple', price: 1.0 },
    { id: 2, name: 'Banana', price: 0.5 },
    { id: 3, name: 'Carrot', price: 0.3 },
  ];

  const handleRegister = (username, password) => {
    setRegisteredUser({ username, password });
    setPage('login');
  };

  const handleLogin = (username, password) => {
    if (registeredUser && username === registeredUser.username && password === registeredUser.password) {
      setPage('home');
    } else {
      alert('Invalid username or password');
    }
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    // Logic to update quantity of a product in the cart (not implemented in this example)
  };

  const handleLogout = () => {
    setRegisteredUser(null);
    setPage('login');
  };

  // Filtering products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      {(page === 'home' || page === 'cart' || page === 'profile') && (
        <Navbar 
          onNavigate={setPage} 
          onLogout={handleLogout} 
        />
      )}

      {page === 'register' && (
        <Register onRegister={handleRegister} />
      )}

      {page === 'login' && (
        <Login onLogin={handleLogin} />
      )}

      {page === 'home' && (
        <Home
          products={filteredProducts} 
          addToCart={addToCart} 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      )}

      {page === 'cart' && (
        <Cart
          cart={cart}
          onBackToHome={() => setPage('home')}
          removeFromCart={removeFromCart} 
          updateQuantity={updateQuantity} 
        />
      )}

      {page === 'profile' && (
        <Profile user={registeredUser} />
      )}
    </div>
  );
}

export default App;
