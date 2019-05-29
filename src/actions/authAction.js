import { toast } from 'react-toastify';
import API from '../utils/API';

const fetchUser = loginData => ((dispatch) => {
  dispatch({ type: 'GET_USER' });
  API.authLogin(loginData)
    .then((user) => {
      if (user.status === 400) {
        toast.error(user.error);
        dispatch({
          type: 'GET_USER_ERROR',
          payload: user.error,
        });
      }
      if (user.status === 200) {
        dispatch({
          type: 'RETURN_USER',
          payload: user.data,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: 'GET_USER_ERROR',
        payload: err,
      });
    });
});

const registerUser = userData => ((dispatch) => {
  dispatch({ type: 'REGISTER_USER' });
  API.authSignup(userData)
    .then((user) => {
      if (user.status === 400) {
        toast.error(user.error);
        dispatch({
          type: 'REGISTER_USER_ERROR',
          payload: user.error,
        });
      }
      if (user.status === 200) {
        toast.success('Account has been successfully created');

        dispatch({
          type: 'REGISTER_USER_SUCCESS',
          payload: user.data,
        });

        localStorage.setItem('token', user.data[0].token);
        localStorage.setItem('who', user.data[0].user.isAdmin);
        localStorage.setItem('picture', user.data[0].user.passportUrl);
        localStorage.setItem('email', user.data[0].user.email);
        localStorage.setItem('name', user.data[0].user.name);
        localStorage.setItem('phone', user.data[0].user.phoneNumber);

        window.location = '/parties';
      }
    })
    .catch((err) => {
      toast.error(err);
      dispatch({
        type: 'REGISTER_USER_CATCH_ERROR',
        payload: err,
      });
    });
});

export default { fetchUser, registerUser };
