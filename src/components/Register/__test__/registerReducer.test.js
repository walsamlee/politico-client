import registerReducer from '../../../reducers/registerReducer';

describe('register reducer', () => {
  it('should return initial state', () => {
    expect(registerReducer(undefined, {})).toEqual({
      registering: false,
      registered: false,
      user: [],
      error: null,
    });
  });

  it('should return REGISTER_USER state', () => {
    expect(registerReducer([], {
      type: 'REGISTER_USER',
      payload: { registering: true },
    })).toEqual(
      {
        registering: true,
      },
    );
  });

  it('should return REGISTER_USER_SUCCESS state', () => {
    expect(registerReducer([], {
      type: 'REGISTER_USER_SUCCESS',
      payload: ['Sam'],
    })).toEqual({
      registering: false,
      registered: true,
      user: ['Sam'],
    });
  });

  it('should return REGISTER_USER_ERROR state', () => {
    expect(registerReducer([], {
      type: 'REGISTER_USER_ERROR',
      payload: 'Error registering data',
    })).toEqual(
      {
        registering: false,
        registered: false,
        error: 'Error registering data',
      },
    );
  });

  it('should return REGISTER_USER_CATCH_ERROR state', () => {
    expect(registerReducer([], {
      type: 'REGISTER_USER_CATCH_ERROR',
      payload: 'Error registering data',
    })).toEqual(
      {
        registering: false,
        registered: false,
        error: 'Error registering data',
      },
    );
  });
});
