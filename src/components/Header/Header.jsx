import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../politico.png';

import Menu from '../Menu/Menu';

const Header = () => (
  <div className="header">
    <div className="brand">
      <div className="brand-logo">
        <Link to="/"><img src={logo} alt="brand-logo" /></Link>
      </div>
    </div>
    <div className="navigation-bar">
      <div className="menu">
        <Menu />
      </div>
    </div>
  </div>
);

export default Header;
