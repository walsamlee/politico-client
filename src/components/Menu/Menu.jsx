import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout';
import getToken from '../../utils/getToken';
import getPrivilege from '../../utils/getPrivilege';

const Menu = () => {
  const token = getToken();
  const privilege = getPrivilege();

  if (token) {
    if (privilege === 'true') {
      return (
        <nav>
          <div className="pry-menu-items">
            <Link to="/parties">Create Party</Link>
            <Link to="/vote">Create Office</Link>
          </div>
          <Logout />
        </nav>
      );
    }
    return (
      <nav>
        <div className="pry-menu-items">
          <Link to="/parties">Parties</Link>
          <Link to="/vote">Vote</Link>
          <Link to="/history">Voting History</Link>
        </div>
        <Logout />
      </nav>
    );
  }
  return (
    <nav>
      <div className="pry-menu-items">
        <Link to="/parties">Parties</Link>
      </div>
      <div className="logout">
        <Link to="/login" id="login">Login</Link>
        <Link to="/register" id="signup">Register</Link>
      </div>
    </nav>
  );
};

export default Menu;
