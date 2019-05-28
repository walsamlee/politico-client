import { connect } from 'react-redux';
import authAction from '../../actions/authAction';
import Register from '../Register/Register';

const mapStateToProps = state => ({
  data: state,
});

const mapDispatchToProps = dispatch => ({
  registerUser: (userData) => {
    dispatch(authAction.registerUser(userData));
  },
});

const AuthRegister = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);

export default AuthRegister;
