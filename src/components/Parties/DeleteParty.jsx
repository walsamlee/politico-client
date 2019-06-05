/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class DeleteParty extends Component {
    deleteHandler = (event) => {
      event.preventDefault();
      if (window.confirm('Are you sure you want to delete party?')) {
        this.props.deleteParty(this.props.partyId, localStorage.getItem('token'));
      }
    }

    render() {
      return (
        <button type="submit" className="btn btn-cart" onClick={this.deleteHandler}>Delete</button>
      );
    }
}

export default DeleteParty;
