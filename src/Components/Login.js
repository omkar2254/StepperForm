import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css'
const Login = ({ goToNextStep }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }

    // Password length validation
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return false;
    }

    // Form is valid
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (validateForm()) {
      // Perform login logic (e.g., send request to server)
      console.log("Email:", email);
      console.log("Password:", password);

      // Navigate to the '/Signup' route after successful login
      goToNextStep();
      navigate('/signup')
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
