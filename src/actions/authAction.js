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

export default fetchUser;
