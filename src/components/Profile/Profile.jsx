/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import GetOffices from '../containers/GetOffices';

const Profile = () => {
  let userImage = localStorage.getItem('picture');
  if (userImage === '') {
    userImage = 'https://res.cloudinary.com/walsam/image/upload/v1559156362/user-1633249__340.png';
  }

  return (
    <div className="user-info">
      <div id="user-info-main" className="user-info-main">
        <div className="user-profile-details">
          <div className="profile-pic">
            <img src={userImage} alt="Profile" />
          </div>
          <div id="profile-details" className="profile-details">
            <h3>{localStorage.getItem('name')}</h3>
            <p>{localStorage.getItem('email')}</p>
            <p>{localStorage.getItem('phone')}</p>
            <button type="button" className="btn btn-cart">Edit profile</button>
          </div>
        </div>
        <div className="office-interest">
          <label htmlFor="office-interest-checkbox"><h3>Run for Office</h3></label>
          <input type="checkbox" name="office-interest-checkbox" id="office-interest-checkbox" />
          <div className="indicate-interest">
            <GetOffices />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
