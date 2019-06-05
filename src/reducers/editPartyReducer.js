const initialState = {
  editing: false,
  edited: false,
  party: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PARTY': {
      return { ...state, editing: true };
    }
    case 'EDIT_PARTY_SUCCESS': {
      return {
        ...state,
        editing: false,
        edited: true,
        party: action.payload,
      };
    }
    case 'EDIT_PARTY_INPUT_ERROR': {
      return {
        ...state,
        editing: false,
        edited: false,
        error: action.payload,
      };
    }
    case 'EDIT_PARTY_UNAUTHORIZED_ERROR': {
      return {
        ...state,
        editing: false,
        edited: false,
        error: action.payload,
      };
    }
    case 'EDIT_PARTY_FORBIDDEN_ERROR': {
      return {
        ...state,
        editing: false,
        edited: false,
        error: action.payload,
      };
    }
    case 'EDIT_PARTY_ERROR_CATCH': {
      return {
        ...state,
        editing: false,
        edited: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
