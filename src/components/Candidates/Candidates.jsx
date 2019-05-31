/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import Candidate from './Candidate';

class Candidates extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    const { fetchCandidates } = this.props;
    fetchCandidates(token);
  }

  render() {
    const { data } = this.props;
    const { candidate } = data;
    const { candidates } = candidate;

    return (
      <div className="dashboard">
        <div className="history-board">
          {
            candidates.map(item => (
              <Candidate key={item.officeid} details={item} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Candidates;
