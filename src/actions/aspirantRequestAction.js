import { toast } from 'react-toastify';
import API from '../utils/API';

const runForOffice = (aspirantData, token) => ((dispatch) => {
  dispatch({ type: 'SEND_REQUEST' });
  API.runForOffice(aspirantData, token)
    .then((response) => {
      if (response.status === 400) {
        const message = 'You have already send request for this office';
        toast.error(message);
        dispatch({
          type: 'REQUEST_ERROR',
          payload: response.error,
        });
      }
      if (response.status === 201) {
        toast.success('Request sent successfully');
        dispatch({
          type: 'REQUEST_SUCCESS',
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      toast.error(error);
      dispatch({
        type: 'REQUEST_ERROR_CATCH',
        payload: error,
      });
    });
});

export default { runForOffice };
