const initialState = {
  registering: false,
  registered: false,
  user: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_USER': {
      return { ...state, registering: true };
    }
    case 'REGISTER_USER_SUCCESS': {
      return {
        ...state,
        registering: false,
        registered: true,
        user: action.payload,
      };
    }
    case 'REGISTER_USER_ERROR': {
      return {
        ...state,
        registering: false,
        registered: false,
        error: action.payload,
      };
    }
    case 'REGISTER_USER_CATCH_ERROR': {
      return {
        ...state,
        registering: false,
        registered: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
