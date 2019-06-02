const initialState = {
  casting: false,
  casted: false,
  vote: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CAST_VOTE': {
      return { ...state, casting: true };
    }
    case 'VOTE_CAST_SUCCESS': {
      return {
        ...state,
        casting: false,
        casted: true,
        vote: action.payload,
      };
    }
    case 'VOTE_CAST_ERROR': {
      return {
        ...state,
        casting: false,
        casted: false,
        error: action.payload,
      };
    }
    case 'VOTE_CAST_UNAUTHORIZED_ERROR': {
      return {
        ...state,
        casting: false,
        casted: false,
        error: action.payload,
      };
    }
    case 'VOTE_CAST_ERROR_CATCH': {
      return {
        ...state,
        casting: false,
        casted: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
