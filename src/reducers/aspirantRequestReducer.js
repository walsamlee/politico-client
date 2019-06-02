const initialState = {
  requesting: false,
  requested: false,
  vote: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_REQUEST': {
      return { ...state, requesting: true };
    }
    case 'REQUEST_SUCCESS': {
      return {
        ...state,
        requesting: false,
        requested: true,
        vote: action.payload,
      };
    }
    case 'REQUEST_ERROR': {
      return {
        ...state,
        requesting: false,
        requested: false,
        error: action.payload,
      };
    }
    case 'REQUEST_ERROR_CATCH': {
      return {
        ...state,
        requesting: false,
        requested: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
