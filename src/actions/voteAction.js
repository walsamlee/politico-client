import { toast } from 'react-toastify';
import API from '../utils/API';

const castVote = (voteData, token) => ((dispatch) => {
  dispatch({ type: 'CAST_VOTE' });
  API.castVote(voteData, token)
    .then((response) => {
      if (response.status === 400) {
        const message = 'You can only cast your vote once for this office';
        toast.error(message);
        dispatch({
          type: 'VOTE_CAST_ERROR',
          payload: message,
        });
      }
      if (response.status === 201) {
        toast.success('Vote casted successfully');
        dispatch({
          type: 'VOTE_CAST_SUCCESS',
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      toast.error(error);
      dispatch({
        type: 'VOTE_CAST_ERROR_CATCH',
        payload: error,
      });
    });
});

export default { castVote };
