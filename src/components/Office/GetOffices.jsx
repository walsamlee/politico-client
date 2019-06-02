/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import Run from '../containers/Run';

class GetOffices extends Component {
  constructor() {
    super();
    this.state = {
      party: '',
      office: '',
    };
  }

  componentDidMount() {
    const { getOffices } = this.props;
    getOffices();
  }

  changeHandler = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { data } = this.props;
    const { getOffices, parties } = data;
    const { offices } = getOffices;
    const allParties = parties.parties;

    const aspirantData = {
      id: localStorage.getItem('whom'),
      office: this.state.office,
      party: this.state.party,
    };

    return (
      <div>
        <form>
          <div className="party-selector">
            <label htmlFor="party">Party: </label>
            <select name="party" onChange={this.changeHandler}>
              <option value="0">-------------Select-----------</option>
              {
                  allParties.map(party => (
                    <option value={party.id}>{party.name}</option>
                  ))
              }
            </select>
          </div>
          <div className="office-selector">
            <label htmlFor="office">Office: </label>
            <select name="office" onChange={this.changeHandler}>
              <option value="0">-------------Select-----------</option>
              {
                  offices.map(office => (
                    <option value={office.id}>{office.name}</option>
                  ))
              }
            </select>
          </div>
          <Run aspirantData={aspirantData} />
        </form>
      </div>
    );
  }
}

export default GetOffices;
