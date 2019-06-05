const initialState = {
  deleting: false,
  deleted: false,
  party: [],
  error: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_PARTY': {
      return { ...state, deleting: true };
    }
    case 'PARTY_DELETED': {
      return {
        ...state,
        deleting: false,
        deleted: true,
        party: action.payload,
      };
    }
    case 'ERROR_DELETING_PARTY': {
      return { ...state, deleting: false, error: action.payload };
    }
    default:
      return state;
  }
};
