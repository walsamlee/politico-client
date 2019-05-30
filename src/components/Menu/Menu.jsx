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
        <div>
          <nav>
            <div className="pry-menu-items">
              <Link to="/parties">Create Party</Link>
              <Link to="/create-office">Create Office</Link>
            </div>
            <Logout />
          </nav>
          <div className="mini-menu-icon">
            <img src="https://res.cloudinary.com/walsam/image/upload/v1559199507/politico-mini.png" alt="logo" />
            <button type="submit"><i className="fas fa-bars" /></button>
          </div>
        </div>
      );
    }
    return (
      <div>
        <nav>
          <div className="pry-menu-items">
            <Link to="/parties">Parties</Link>
            <Link to="/candidates">Vote</Link>
            <Link to="/history">Voting History</Link>
          </div>
          <div className="logout">
            <Logout />
          </div>
        </nav>
        <div className="mini-menu-icon">
          <img src="https://res.cloudinary.com/walsam/image/upload/v1559199507/politico-mini.png" alt="logo" />
          <button type="submit"><i className="fas fa-bars" /></button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <nav>
        <div className="pry-menu-items">
          <Link to="/parties">Parties</Link>
        </div>
        <div className="logout">
          <Link to="/login" id="login">Login</Link>
          <Link to="/register" id="signup">Register</Link>
        </div>
      </nav>
      <div className="mini-menu-icon">
        <img src="https://res.cloudinary.com/walsam/image/upload/v1559199507/politico-mini.png" alt="logo" />
        <button type="submit"><i className="fas fa-bars" /></button>
      </div>
    </div>
  );
};

export default Menu;
