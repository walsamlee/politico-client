const initialState = {
  fetching: false,
  fetched: false,
  candidates: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CANDIDATES': {
      return { ...state, fetching: true };
    }
    case 'CANDIDATES_RETURNED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        candidates: action.payload,
      };
    }
    case 'GET_CANDIDATES_ERROR': {
      return { ...state, fetching: false, error: action.payload };
    }
    default:
      return state;
  }
};
