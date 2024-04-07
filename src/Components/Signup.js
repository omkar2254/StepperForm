import React, { useState } from 'react';
import '../Styles/Signup.css';
import { useNavigate } from 'react-router-dom'
function Signup({goToPreviousStep}) {
  const navigate = useNavigate()
  const [accountNumber, setAccountNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleAccountNumberChange = (e) => {
    setAccountNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your logic for handling form submission
    console.log('Account Number:', accountNumber);
    console.log('Password:', password);
    // You can make API calls here to submit the payment details
    // Reset form fields after submission
    setAccountNumber('');
    setPassword('');
  };

  const goBack = ()=>{
    navigate('/')
    goToPreviousStep()
  }

  return (
    <div className="Signup">
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="accountNumber">Account Number:</label>
          <input
            type="text"
            id="accountNumber"
            name="accountNumber"
            value={accountNumber}
            onChange={handleAccountNumberChange}
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
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button onClick={goBack}>Previous</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
