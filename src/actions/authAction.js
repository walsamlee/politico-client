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
  dispatch({ type: 'GET_REGISTERED_USER' });
  API.authSignup(userData)
    .then((user) => {
      if (user.status === 400) {
        toast.error(user.error);
        dispatch({
          type: 'GET_REGISTERED_USER_ERROR',
          payload: user.error,
        });
      }
      if (user.status === 200) {
        localStorage.setItem('token', user.data[0].token);
        localStorage.setItem('who', user.data[0].user.isAdmin);
        localStorage.setItem('picture', user.data[0].user.passportUrl);
        localStorage.setItem('email', user.data[0].user.email);
        localStorage.setItem('name', user.data[0].user.name);
        localStorage.setItem('phone', user.data[0].user.phoneNumber);

        window.location = '/parties';

        toast.success('Account has been successfully created');

        dispatch({
          type: 'RETURN_REGISTERED_USER',
          payload: user.data,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: 'GET_REGISTERED_USER_CATCH_ERROR',
        payload: err,
      });
    });
});

export default { fetchUser, registerUser };
