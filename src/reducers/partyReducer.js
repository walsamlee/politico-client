const initialState = {
  fetching: false,
  fetched: false,
  parties: [],
  error: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PARTIES': {
      return { ...state, fetching: true };
    }
    case 'PARTIES_RETURNED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        parties: action.payload,
      };
    }
    case 'GET_PARTIES_ERROR': {
      return { ...state, fetching: false, error: action.payload };
    }
    default:
      return state;
  }
};
