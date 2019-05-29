/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class CreateOffice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      officeid: '',
      officetype: '',
      officename: '',
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');

    if (token) {
      const officeData = {
        id: this.state.officeid,
        type: this.state.officetype,
        name: this.state.officename,
      };

      this.props.createOffice(officeData, token);
    }
  }

  resetHandler = () => {
    this.setState({
      officeid: '',
      officetype: '',
      officename: '',
    });
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="main">
        <div className="dashboard">
          <div className="signup-form">
            <form id="create-office" name="sign-up" onSubmit={this.submitHandler} onReset={this.resetHandler}>
              <table className="form-table">
                <tr>
                  <td className="label" />
                  <td>
                    <input id="office-id" type="text" name="officeid" placeholder="Office ID" required onChange={this.changeHandler} value={this.state.officeid} />
                  </td>
                </tr>
                <tr>
                  <td className="label" />
                  <td>
                    <input id="office-type" type="text" name="officetype" placeholder="Office Type" required onChange={this.changeHandler} value={this.state.officetype} />
                  </td>
                </tr>
                <tr>
                  <td className="label" />
                  <td>
                    <input id="officename" type="text" name="officename" placeholder="Office Name" required onChange={this.changeHandler} value={this.state.officename} />
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <input type="submit" className="btn btn-cart" value="Save" />
                    <input type="reset" className="btn btn-cart" value="Reset" onClick={this.resetHandler} />
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateOffice;
