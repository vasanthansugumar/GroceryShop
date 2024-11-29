// import React, { useState } from 'react';
// import './Register.css';  
// function Register({ onRegister }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onRegister(username, password);
//   };

//   return (
//     <div className="register-container">
//       <form onSubmit={handleSubmit} className="register-form">
//         <h2>Register</h2>
//         <div className="form-group">
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Register;

import React, { useState } from 'react';
import './Register.css';
import axios from 'axios'; // Import axios

function Register({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Make the API call to register the user using axios
      const response = await axios.post('http://localhost:3001/users', {
        username,
        password,
      });

      console.log('Response:', response.data); // Log the response data

      // Successful registration
      onRegister(username, password); // Call the onRegister function passed as a prop
    } catch (error) {
      // Handle registration error
      const errorMessage = error.response?.data?.message || 'Registration failed. Please try again.';
      setError(errorMessage);
      console.error('Axios error:', error);
    }

    console.log('Submitting:', { username, password });
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Register</h2>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
