/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Loader from '../../utils/Loader';
import Party from '../Party/Party';

class Parties extends Component {
  componentDidMount() {
    const { fetchParties } = this.props;
    fetchParties();
  }

  render() {
    const { data } = this.props;
    const { parties } = data;
    return (
      <div className="dashboard">
        <div className="edit-board">
          <div className="party-view">
            {
                parties.fetching
                  ? <Loader />
                  : parties.parties.map(party => (
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
