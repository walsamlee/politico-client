import { toast } from 'react-toastify';
import API from '../utils/API';

const editParty = (partyName, partyId, token) => ((dispatch) => {
  API.editParty(partyName, partyId, token)
    .then((response) => {
      if (response.status === 400) {
        const errorMessage = 'Unable to Edit Party';
        toast.error(errorMessage);
        dispatch({
          type: 'EDIT_PARTY_INPUT_ERROR',
          payload: errorMessage,
        });
      }
      if (response.status === 401) {
        toast.error(response.error);
        dispatch({
          type: 'EDIT_PARTY_UNAUTHORIZED_ERROR',
          payload: response.error,
        });
      }
      if (response.status === 403) {
        toast.error(response.error);
        dispatch({
          type: 'EDIT_PARTY_FORBIDDEN_ERROR',
          payload: response.error,
        });
      }
      if (response.status === 200) {
        dispatch({
          type: 'EDIT_PARTY_SUCCESS',
          payload: response.data,
        });
        window.location = '/parties';
      }
    })
    .catch((err) => {
      dispatch({
        type: 'EDIT_PARTY_ERROR_CATCH',
        payload: err,
      });
    });
});

const deleteParty = (partyId, token) => ((dispatch) => {
  dispatch({ type: 'DELETE_PARTY' });
  API.deleteParty(partyId, token)
    .then((party) => {
      dispatch({
        type: 'PARTY_DELETED',
        payload: party.data[0],
      });
      window.location = '/parties';
    })
    .catch((error) => {
      dispatch({
        type: 'ERROR_DELETING_PARTY',
        payload: error,
      });
    });
});

const fetchParties = () => ((dispatch) => {
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

const createParty = (partyData, token) => ((dispatch) => {
  API.addParty(partyData, token)
    .then((response) => {
      if (response.status === 400) {
        const errorMessage = 'Unable to Create Party';
        toast.error(errorMessage);
        dispatch({
          type: 'CREATE_PARTY_INPUT_ERROR',
          payload: errorMessage,
        });
      }
      if (response.status === 401) {
        toast.error(response.error);
        dispatch({
          type: 'CREATE_PARTY_UNAUTHORIZED_ERROR',
          payload: response.error,
        });
      }
      if (response.status === 403) {
        toast.error(response.error);
        dispatch({
          type: 'CREATE_PARTY_FORBIDDEN_ERROR',
          payload: response.error,
        });
      }
      if (response.status === 201) {
        toast.success('Party was successfully created');
        dispatch({
          type: 'CREATE_PARTY_SUCCESS',
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: 'CREATE_PARTY_ERROR_CATCH',
        payload: err,
      });
    });
});

export default {
  fetchParties, createParty, deleteParty, editParty,
};
