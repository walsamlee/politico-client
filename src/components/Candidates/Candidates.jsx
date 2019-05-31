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
          <div className="candidate-form">
            <form action="">
              <label htmlFor="office">Choose Office: </label>
              <select name="office" id="office">
                {candidates.map((office) => {
                  const { name } = office;
                  return <option value={name}>{name}</option>;
                })}
              </select>
            </form>
          </div>
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
