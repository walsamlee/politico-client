import { connect } from 'react-redux';
import fetchUser from '../../actions/authAction';
import Login from '../Login/Login';

const mapStateToProps = state => ({
  data: state,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (userData) => {
    dispatch(fetchUser(userData));
  },
});

const AuthLogin = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default AuthLogin;
