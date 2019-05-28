/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Loader from '../../utils/Loader';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.fetchUser(userData);

    this.setState({ [event.target.name]: '' });
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    let loggedInUser = {
      fetching: false,
      user: [],
    };

    const { data } = this.props;

    loggedInUser = data.login;

    if (loggedInUser.user.length > 0) {
      localStorage.setItem('token', loggedInUser.user[0].token);
      localStorage.setItem('who', loggedInUser.user[0].user.isAdmin);
      localStorage.setItem('picture', loggedInUser.user[0].user.passportUrl);
      localStorage.setItem('email', loggedInUser.user[0].user.email);
      localStorage.setItem('name', loggedInUser.user[0].user.name);
      localStorage.setItem('phone', loggedInUser.user[0].user.phoneNumber);

      window.location = '/parties';
    }
    return (
      <div className="sign-in-page">
        {loggedInUser.fetching ? <Loader /> : ''}
        <div className="sign-in">
          <div className="signin-logo">
            <img src="https://res.cloudinary.com/walsam/image/upload/v1558781559/politico.png" alt="brand-logo" />
          </div>
          <div className="login-form">
            <h1><i className="fas fa-unlock-alt" /></h1>
            <div className="failure" id="failure">
              <p>Wrong Username or Password</p>
            </div>
            <form id="login" name="login" onSubmit={this.submitHandler}>
              <div>
                <input
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={this.changeHandler}
                  value={this.state.email}
                />
              </div>
              <div>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.changeHandler}
                  value={this.state.password}
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
  }
}

export default Login;
