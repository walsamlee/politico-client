/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Party from '../Party/Party';

class Parties extends Component {
  componentDidMount() {
    const { fetchParties } = this.props;
    fetchParties();
  }

  render() {
    const { data } = this.props;
    return (
      <div className="dashboard">
        <div className="edit-board">
          <div className="party-view">
            {
                data.parties.fetching
                  ? 'Loading...'
                  : data.parties.parties.map(party => (
                    <Party key={party.id} party={party} />
                  ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Parties;
