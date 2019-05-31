import API from '../utils/API';

const fetchCandidates = token => ((dispatch) => {
  dispatch({ type: 'GET_CANDIDATES' });
  API.getCandidates(token)
    .then((candidates) => {
      dispatch({
        type: 'CANDIDATES_RETURNED',
        payload: candidates.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: 'GET_CANDIDATES_ERROR',
        payload: err,
      });
    });
});

export default fetchCandidates;
