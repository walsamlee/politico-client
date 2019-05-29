/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Candidates = () => (
  <div className="dashboard">
    <div className="history-board">
      <div className="candidate-form">
        <form action="">
          <label htmlFor="office">Choose Office:</label>
          <select name="office" id="office">
            <option value="president">President</option>
            <option value="senator">Senator</option>
            <option value="represantative">Member House of Represantative</option>
            <option value="governor">Governor</option>
          </select>
        </form>
      </div>
      <div className="vote">
        <div className="vote-date">
          <button type="button" className="btn btn-cart">Vote</button>
        </div>
        <div className="candidate-details">
          <div className="candidate-image">
            <img src="https://res.cloudinary.com/walsam/image/upload/v1559143611/male.png" alt="candidate" />
          </div>
          <div className="candidate-particulars">
            <div className="candidate-name">
              <p>Nnamdi Azikwe</p>
            </div>
            <div className="candidate-office">
              <h4>President</h4>
            </div>
          </div>
        </div>
        <div className="party-details">
          <div className="party-details-logo">
            <img src="https://res.cloudinary.com/walsam/image/upload/v1559144948/apga.png" alt="Party Logo" />
          </div>
        </div>
      </div>
      <div className="vote">
        <div className="vote-date">
          <button type="button" className="btn btn-cart">Vote</button>
        </div>
        <div className="candidate-details">
          <div className="candidate-image">
            <img src="https://res.cloudinary.com/walsam/image/upload/v1559143600/female.png" alt="" />
          </div>
          <div className="candidate-particulars">
            <div className="candidate-name">
              <p>Olufunmilayo Kuti</p>
            </div>
            <div className="candidate-office">
              <h4>President</h4>
            </div>
          </div>
        </div>
        <div className="party-details">
          <div className="party-details-logo">
            <img src="https://res.cloudinary.com/walsam/image/upload/v1550613166/difd2f30syyz5fynogsz.png" alt="Party Logo" />
          </div>
        </div>
      </div>
      <div className="vote">
        <div className="vote-date">
          <button type="button" className="btn btn-cart">Vote</button>
        </div>
        <div className="candidate-details">
          <div className="candidate-image">
            <img src="https://res.cloudinary.com/walsam/image/upload/v1559143611/male.png" alt="candidate" />
          </div>
          <div className="candidate-particulars">
            <div className="candidate-name">
              <p>Ahmadu Bello</p>
            </div>
            <div className="candidate-office">
              <h4>President</h4>
            </div>
          </div>
        </div>
        <div className="party-details">
          <div className="party-details-logo">
            <img src="https://res.cloudinary.com/walsam/image/upload/v1550612284/zausu6uc1iet2lo4fsqr.png" alt="Party Logo" />
          </div>
        </div>
      </div>
      <div className="vote">
        <div className="vote-date">
          <button type="button" className="btn btn-cart">Vote</button>
        </div>
        <div className="candidate-details">
          <div className="candidate-image">
            <img src="https://res.cloudinary.com/walsam/image/upload/v1559143611/male.png" alt="" />
          </div>
          <div className="candidate-particulars">
            <div className="candidate-name">
              <p>Ladoke Akintola</p>
            </div>
            <div className="candidate-office">
              <h4>President</h4>
            </div>
          </div>
        </div>
        <div className="party-details">
          <div className="party-details-logo">
            <img src="https://res.cloudinary.com/walsam/image/upload/v1550507464/fv2nxnx5gbxuiafmeabr.jpg" alt="Party Logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Candidates;
