/* eslint-disable react/prop-types */
import React from 'react';
import Vote from '../containers/Vote';

const Candidate = (data) => {
  const voter = parseInt(localStorage.getItem('whom'), 10);

  const voteData = {
    office: data.details.officeid,
    candidate: data.details.userid,
    voter,
  };

  return (
    <div className="vote">
      <Vote voteData={voteData} />
      <div className="candidate-details">
        <div className="candidate-image">
          <img src={data.details.passporturl} alt="candidate" />
        </div>
        <div className="candidate-particulars">
          <div className="candidate-name">
            <p>
              {data.details.firstname}
            &nbsp;
              {data.details.lastname}
            </p>
          </div>
          <div className="candidate-office">
            <h4>{data.details.name}</h4>
          </div>
        </div>
      </div>
      <div className="party-details">
        <div className="party-details-logo">
          <img src={data.details.logourl} alt="Party Logo" />
        </div>
      </div>
    </div>
  );
};

export default Candidate;
