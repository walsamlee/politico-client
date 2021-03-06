import { connect } from 'react-redux';
import authAction from '../../actions/authAction';
import Login from '../Login/Login';

const mapStateToProps = state => ({
  data: state,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (userData) => {
    dispatch(authAction.fetchUser(userData));
  },
});

const AuthLogin = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default AuthLogin;
