import loginReducer from '../../../reducers/loginReducer';

describe('user reducer', () => {
  it('should return initial state', () => {
    expect(loginReducer(undefined, {})).toEqual({
      fetching: false,
      fetched: false,
      user: [],
      error: null,
    });
  });

  it('should return GET_USER state', () => {
    expect(loginReducer([], {
      type: 'GET_USER',
      payload: { fetching: true },
    })).toEqual(
      {
        fetching: true,
      },
    );
  });

  it('should return RETURN_USER state', () => {
    expect(loginReducer([], {
      type: 'RETURN_USER',
      payload: ['APC'],
    })).toEqual({
      fetching: false,
      fetched: true,
      user: ['APC'],
    });
  });

  it('should return GET_USER_ERROR state', () => {
    expect(loginReducer([], {
      type: 'GET_USER_ERROR',
      payload: 'Error fetching data',
    })).toEqual(
      {
        fetching: false,
        fetched: false,
        error: 'Error fetching data',
      },
    );
  });
});
