import React, { useState } from 'react';
import './SignInPage.css';
import { Link } from 'react-router-dom';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Implement your sign-in logic here
    // Assuming sign-in is successful
    // Navigate to the home page only if email and password are filled
    if (email && password) {
      window.location.href = '/Home';
      window.location.href = '/RegistrationForm';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Implement your registration logic here
    console.log('Registration logic to be implemented');
  };

  return (
    <div className="login">

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="login__signIn"
            onClick={handleSignIn}
          >
            <Link to="/Home">Sign in</Link>
          </button>
        </form>
        <p>
          By Signing-in you agree to TrendSphere's Conditions of use & sale.
          Please see our Privacy Notices, our Cookies Notice, and our
          Interest-Based Ads Notice.
        </p>
        <button
          className="login__registerButton"
          onClick={handleRegister}
        >
          <Link to="/register">Create your TrendSphere Account</Link>
        </button>
      </div>
    </div>
  );
}

export default SignInPage;
