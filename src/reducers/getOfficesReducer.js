const initialState = {
  fetching: false,
  fetched: false,
  offices: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_OFFICES': {
      return { ...state, fetching: true };
    }
    case 'GET_OFFICES_SUCCESS': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        offices: action.payload,
      };
    }
    case 'GET_OFFICES_CATCH': {
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
