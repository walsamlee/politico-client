const initialState = {
  creating: false,
  created: false,
  party: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PARTY': {
      return { ...state, creating: true };
    }
    case 'CREATE_PARTY_SUCCESS': {
      return {
        ...state,
        creating: false,
        created: true,
        party: action.payload,
      };
    }
    case 'CREATE_PARTY_INPUT_ERROR': {
      return {
        ...state,
        creating: false,
        created: false,
        error: action.payload,
      };
    }
    case 'CREATE_PARTY_UNAUTHORIZED_ERROR': {
      return {
        ...state,
        creating: false,
        created: false,
        error: action.payload,
      };
    }
    case 'CREATE_PARTY_FORBIDDEN_ERROR': {
      return {
        ...state,
        creating: false,
        created: false,
        error: action.payload,
      };
    }
    case 'CREATE_PARTY_ERROR': {
      return {
        ...state,
        creating: false,
        created: false,
        error: action.payload,
      };
    }
    case 'CREATE_PARTY_ERROR_CATCH': {
      return {
        ...state,
        creating: false,
        created: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
