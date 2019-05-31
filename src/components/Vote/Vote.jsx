/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class Vote extends Component {
    voteHandler = (event) => {
      event.preventDefault();
      const { voteData } = this.props;
      const token = localStorage.getItem('token');

      this.props.castVote(voteData, token);
    }

    render() {
      return (
        <div className="vote-date">
          <button type="button" className="btn btn-cart" onClick={this.voteHandler}>Vote</button>
        </div>
      );
    }
}

export default Vote;
