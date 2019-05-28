/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      preview: '',
      firstname: '',
      lastname: '',
      othername: '',
      telephone: '',
      email: '',
      password: '',
    };
  }

    registerHandler = (event) => {
      event.preventDefault();

      const userData = {
        passportUrl: this.state.preview,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        othername: this.state.othername,
        phoneNumber: this.state.telephone,
        email: this.state.email,
        password: this.state.password,
      };

      this.props.registerUser(userData);
    }

    changeHandler = (event) => {
      this.setState({ [event.target.name]: event.target.value });
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
          this.setState({ preview: response.url });
        })
        .catch(error => error);
    }

    render() {
      return (
        <div className="main">
          <div className="dashboard">
            <div className="signup-form">
              <form id="sign-up" name="registration" onSubmit={this.registerHandler}>
                <table className="form-table">
                  <tr>
                    <td className="label" />
                    <td>
                      <input id="passporturl" type="file" accept="image/*" name="image" onChange={this.imageUploadHandler} value={this.state.image} />
                    </td>
                  </tr>
                  <tr>
                    <td className="label" />
                    <td>
                      <input id="firstname" type="text" name="firstname" placeholder="First Name" required onChange={this.changeHandler} value={this.state.firstname} />
                    </td>
                  </tr>
                  <tr>
                    <td className="label" />
                    <td>
                      <input id="lastname" type="text" name="lastname" placeholder="Last Name" required onChange={this.changeHandler} value={this.state.lastname} />
                    </td>
                  </tr>
                  <tr>
                    <td className="label" />
                    <td>
                      <input id="othername" type="text" name="othername" placeholder="Other Name" required onChange={this.changeHandler} value={this.state.othername} />
                    </td>
                  </tr>
                  <tr>
                    <td className="label" />
                    <td>
                      <input id="telephone" type="text" name="telephone" placeholder="Phone Number" required onChange={this.changeHandler} value={this.state.telephone} />
                    </td>
                  </tr>
                  <tr>
                    <td className="label" />
                    <td>
                      <input id="email" type="email" name="email" placeholder="Email Address" required onChange={this.changeHandler} value={this.state.email} />
                    </td>
                  </tr>
                  <tr>
                    <td className="label" />
                    <td>
                      <input id="password" type="password" name="password" placeholder="Password" required onChange={this.changeHandler} value={this.state.password} />
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <input type="submit" className="btn btn-cart" value="Register" />
                      <input type="reset" className="btn btn-cart" value="Reset" />
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

export default Register;
