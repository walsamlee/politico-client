const initialState = {
  creating: false,
  created: false,
  office: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_OFFICE': {
      return { ...state, creating: true };
    }
    case 'CREATE_OFFICE_SUCCESS': {
      return {
        ...state,
        creating: false,
        created: true,
        office: action.payload,
      };
    }
    case 'CREATE_OFFICE_INPUT_ERROR': {
      return {
        ...state,
        creating: false,
        created: false,
        error: action.payload,
      };
    }
    case 'CREATE_OFFICE_UNAUTHORIZED_ERROR': {
      return {
        ...state,
        creating: false,
        created: false,
        error: action.payload,
      };
    }
    case 'CREATE_OFFICE_FORBIDDEN_ERROR': {
      return {
        ...state,
        creating: false,
        created: false,
        error: action.payload,
      };
    }
    case 'CREATE_OFFICE_ERROR': {
      return {
        ...state,
        creating: false,
        created: false,
        error: action.payload,
      };
    }
    case 'CREATE_OFFICE_ERROR_CATCH': {
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
