/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Vote from '../containers/Vote';

class Candidate extends Component {
  dosomething = () => {
    const a = 4;
    return a;
  }

  render() {
    const { details } = this.props;

    const voter = parseInt(localStorage.getItem('whom'), 10);

    const voteData = {
      office: details.officeid,
      candidate: details.userid,
      voter,
    };

    return (
      <div className="vote">
        <Vote voteData={voteData} />
        <div className="candidate-details">
          <div className="candidate-image">
            <img src={details.passporturl} alt="candidate" />
          </div>
          <div className="candidate-particulars">
            <div className="candidate-name">
              <p>
                {details.firstname}
            &nbsp;
                {details.lastname}
              </p>
            </div>
            <div className="candidate-office">
              <h4>{details.name}</h4>
            </div>
          </div>
        </div>
        <div className="party-details">
          <div className="party-details-logo">
            <img src={details.logourl} alt="Party Logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default Candidate;
