/* eslint-disable arrow-body-style */
import API from '../utils/API';

const fetchParties = () => {
  return ((dispatch) => {
    dispatch({ type: 'GET_PARTIES' });
    API.getAllParties()
      .then((parties) => {
        dispatch({
          type: 'PARTIES_RETURNED',
          payload: parties.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'GET_PARTIES_ERROR',
          payload: err,
        });
      });
  });
};

export default fetchParties;
