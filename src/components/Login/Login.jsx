/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import logo from '../../politico.png';

const Login = () => (
  <div className="sign-in-page">
    <div className="sign-in">
      <div className="signin-logo">
        <img src={logo} alt="brand-logo" />
      </div>
      <div className="login-form">
        <h1><i className="fas fa-unlock-alt" /></h1>
        <div className="failure" id="failure">
          <p>Wrong Username or Password</p>
        </div>
        <form id="login" name="login">
          <div>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="login-buttons">
            <input type="submit" className="btn btn-login" value="Sign In" />
          </div>
        </form>
        <div className="sign-in-footer">
          <div className="forgot-password">
            <a href="/password-reset">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default Login;
