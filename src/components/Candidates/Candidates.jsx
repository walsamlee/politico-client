/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import Candidate from './Candidate';

class Candidates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOfficeCandidate: [],
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    const { fetchCandidates } = this.props;
    fetchCandidates(token);
  }

  selectChangeHandler = (event) => {
    event.preventDefault();
    const { data } = this.props;
    const { candidate } = data;
    const { candidates } = candidate;
    const selectedOffice = parseInt(event.target.value, 10);

    const selectedOfficeCandidate = candidates.filter(
      candidatex => candidatex.officeid === selectedOffice,
    );
    this.setState({
      selectedOfficeCandidate,
    });
  }

  render() {
    const { data } = this.props;
    const { candidate } = data;
    const { candidates } = candidate;

    return (
      <div className="dashboard">
        <div className="candidate-form">
          <form action="">
            <label htmlFor="office">Choose Office to Vote for: </label>
            <select name="office" id="office" onChange={this.selectChangeHandler}>
              <option value="0">Select</option>
              {
                candidates.map(item => (
                  <option value={item.officeid}>{item.name}</option>
                ))
              }
            </select>
            {
              this.state.selectedOfficeCandidate.map(item => (
                <div className="history-board">
                  <Candidate key={item.officeid} details={item} />
                </div>
              ))
            }
          </form>
        </div>
      </div>
    );
  }
}

export default Candidates;
