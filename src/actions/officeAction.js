import { toast } from 'react-toastify';
import API from '../utils/API';

const createOffice = (partyData, token) => ((dispatch) => {
  dispatch({ type: 'CREATE_OFFICE' });
  API.addOffice(partyData, token)
    .then((response) => {
      if (response.status === 400) {
        const errorMessage = `Office with ID ${partyData.id} already exists`;
        toast.error(errorMessage);
        dispatch({
          type: 'CREATE_OFFICE_INPUT_ERROR',
          payload: errorMessage,
        });
      }
      if (response.status === 401) {
        toast.error(response.error);
        dispatch({
          type: 'CREATE_OFFICE_UNAUTHORIZED_ERROR',
          payload: response.error,
        });
      }
      if (response.status === 403) {
        toast.error(response.error);
        dispatch({
          type: 'CREATE_OFFICE_FORBIDDEN_ERROR',
          payload: response.error,
        });
      }
      if (response.status === 201) {
        toast.success('Office was successfully created');
        dispatch({
          type: 'CREATE_OFFICE_SUCCESS',
          payload: response.data[0],
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: 'CREATE_OFFICE_ERROR_CATCH',
        payload: err,
      });
    });
});

export default { createOffice };
