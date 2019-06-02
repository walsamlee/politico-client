import API from '../utils/API';

const getOffices = () => ((dispatch) => {
  dispatch({ type: 'GET_OFFICES' });
  API.getOffices()
    .then((offices) => {
      dispatch({
        type: 'GET_OFFICES_SUCCESS',
        payload: offices.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: 'GET_OFFICES_CATCH',
        payload: error,
      });
    });
});

export default { getOffices };
