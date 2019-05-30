/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';

class CreateParty extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: 'https://res.cloudinary.com/walsam/image/upload/v1559210390/png-icon.png',
      partyname: '',
      parthqaddress: '',
    };
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitHandler = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');

    if (token) {
      const partyData = {
        logoUrl: this.state.image,
        name: this.state.partyname,
        hqAddress: this.state.parthqaddress,
      };

      this.props.createParty(partyData, token);
    }
  }

  imageUploadHandler = (event) => {
    const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/walsam/image/upload';
    const cloudinaryUploadPreset = 'w4rdqtby';

    const file = event.target.files[0];

    const imageFormData = new FormData();

    imageFormData.append('file', file);
    imageFormData.append('upload_preset', cloudinaryUploadPreset);

    fetch(cloudinaryUrl, {
      method: 'POST',
      body: imageFormData,
    })
      .then(response => response.json())
      .then((response) => {
        console.log('Uploaded image: ', response.url);
        this.setState({ image: response.url });
      })
      .catch(error => error);
  }

  resetHandler = () => {
    this.setState({
      partyname: '',
      parthqaddress: '',
    });
  };

  render() {
    return (
      <div className="dashboard">
        <div className="signup-form">
          <form id="create-party" name="sign-up" onSubmit={this.submitHandler}>
            <table className="form-table">
              <tr>
                <td className="label" />
                <td>
                  <label id="party-logo-label" htmlFor="party">
                    <input id="party-logo" className="party-logo" type="file" accept="image/*" name="partylogo" onChange={this.imageUploadHandler} />
                  </label>
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
                  <input id="part-hq-address" type="text" name="parthqaddress" placeholder="HQ Address" required onChange={this.changeHandler} value={this.state.parthqaddress} />
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
    );
  }
}

export default CreateParty;
