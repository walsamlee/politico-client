/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

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
          <h3>Run for Office</h3>
          <form method="POST" action="">
            <div className="party-selector">
              <label htmlFor="party">Party: </label>
              <select name="party">
                <option value="0">-------------Select-----------</option>
                <option value="1">Peoples Democratic Party</option>
                <option value="2">Actions Congress of Nigeria</option>
                <option value="3">Labour Party</option>
                <option value="4">All Democratic Congress</option>
              </select>
            </div>
            <div className="office-selector">
              <label htmlFor="office">Office: </label>
              <select name="office">
                <option value="0">-------------Select-----------</option>
                <option value="President">President</option>
                <option value="Senator">Senator</option>
                <option value="Governor">Governor</option>
                <option value="Chairman">LGA Chairman</option>
              </select>
            </div>
            <div>
              <input type="button" className="btn btn-cart" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
