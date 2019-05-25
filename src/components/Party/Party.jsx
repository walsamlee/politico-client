/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import getPrivilege from '../../utils/getPrivilege';

const Party = ({ party }) => {
  const privilege = getPrivilege();
  if (privilege === 'true') {
    return (
      <div className="party">
        <div className="party-logo">
          <img src={party.logoUrl} alt="Party Logo" />
        </div>
        <h3>{ party.name }</h3>
        {
          <div>
            <Link to={`/editparty/${party.id}`} className="btn btn-cart">Edit</Link>
            <Link to={`/deleteparty/${party.id}`} className="btn btn-cart">Delete</Link>
          </div>
        }
      </div>
    );
  }
  return (
    <div className="party">
      <div className="party-logo">
        <img src={party.logoUrl} alt="Party Logo" />
      </div>
      <h3>{ party.name }</h3>
    </div>
  );
};

export default Party;
