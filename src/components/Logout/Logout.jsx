import React, { Component } from 'react';

class Logout extends Component {
  logoutHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('who');
    localStorage.removeItem('picture');
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    localStorage.removeItem('phone');

    window.location = '/';
  };

  render() {
    return (
      <button type="submit" id="logout" className="btn" onClick={this.logoutHandler}>Logout</button>
    );
  }
}

export default Logout;
