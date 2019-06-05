/* eslint-disable no-alert */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import store from '../../store/store';

class EditParty extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      image: '',
      partyname: '',
      parthqaddress: '',
    };
  }

  componentDidMount() {
    const searchParts = window.location.search.split('=');
    const partyId = parseInt(searchParts[1], 10);

    const storeParties = store.getState();
    const parties = storeParties.parties.parties;

    const setPartyState = parties.filter(
      partyx => partyx.id === partyId,
    );

    this.setState({
      id: setPartyState[0].id,
      image: setPartyState[0].logoUrl,
      partyname: setPartyState[0].name,
      parthqaddress: setPartyState[0].hqAddress,
    });
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitHandler = (event) => {
    event.preventDefault();

    const partyName = {
      name: this.state.partyname,
    };

    if (window.confirm('Are you sure you want to save changes?')) {
      this.props.editParty(partyName, this.state.id, localStorage.getItem('token'));
    }
  }

  cancelHandler = () => {
    window.location = '/parties';
  };

  render() {
    return (
      <div className="dashboard">
        <div className="signup-form">
          <form name="sign-up" onSubmit={this.submitHandler}>
            <table className="form-table">
              <tbody>
                <tr>
                  <td className="label" />
                  <td>
                    <div className="preview">
                      <img src={this.state.image} alt="preview" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="label" />
                  <td>
                    <input id="party-name" type="text" name="partyname" placeholder="Party Name" required onChange={this.changeHandler} value={this.state.partyname} />
                  </td>
                </tr>
                <tr>
                  <td className="label" />
                  <td>
                    <p className="edit-notification">* party address not editable</p>
                    <input id="part-hq-address" type="text" name="parthqaddress" placeholder="HQ Address" readOnly onChange={this.changeHandler} value={this.state.parthqaddress} />
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <input type="submit" className="btn btn-cart" value="Save" />
                    <input type="button" className="btn btn-cart" value="Cancel" onClick={this.cancelHandler} />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    );
  }
}

export default EditParty;
