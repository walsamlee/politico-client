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
      <div className="logout">
        <button type="submit" id="user-icon"><i className="fas fa-user" /></button>
        <button type="submit" id="logout" onClick={this.logoutHandler}>Logout</button>
      </div>
    );
  }
}

export default Logout;
