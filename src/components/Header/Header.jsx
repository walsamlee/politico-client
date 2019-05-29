/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '../Menu/Menu';
import Profile from '../Profile/Profile';

const Header = () => {
  const token = localStorage.getItem('token');

  if (token) {
    return (
      <div>
        <div className="header">
          <div className="brand">
            <div className="brand-logo">
              <Link to="/"><img src="https://res.cloudinary.com/walsam/image/upload/v1558781559/politico.png" alt="brand-logo" /></Link>
            </div>
          </div>
          <div className="navigation-bar">
            <div className="menu">
              <Menu />
            </div>
          </div>
        </div>
        <Profile />
      </div>
    );
  }
  return (
    <div>
      <div className="header">
        <div className="brand">
          <div className="brand-logo">
            <Link to="/"><img src="https://res.cloudinary.com/walsam/image/upload/v1558781559/politico.png" alt="brand-logo" /></Link>
          </div>
        </div>
        <div className="navigation-bar">
          <div className="menu">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
