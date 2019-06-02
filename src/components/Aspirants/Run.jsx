/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class Run extends Component {
  submitHandler = (event) => {
    event.preventDefault();
    const { aspirantData } = this.props;
    const { runForOffice } = this.props;
    const token = localStorage.getItem('token');

    runForOffice(aspirantData, token);
  }

  render() {
    return (
      <div>
        <input type="button" className="btn btn-cart" value="Submit" onClick={this.submitHandler} />
      </div>
    );
  }
}

export default Run;
