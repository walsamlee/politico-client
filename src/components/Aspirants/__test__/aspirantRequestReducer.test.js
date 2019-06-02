import aspirantRequest from '../../../reducers/aspirantRequestReducer';

describe('aspirantRequest reducer', () => {
  it('should return initial state', () => {
    expect(aspirantRequest(undefined, {})).toEqual({
      requesting: false,
      requested: false,
      vote: [],
      error: null,
    });
  });

  it('should return SEND_REQUEST state', () => {
    expect(aspirantRequest([], {
      type: 'SEND_REQUEST',
      payload: { requesting: true },
    })).toEqual(
      {
        requesting: true,
      },
    );
  });

  it('should return REQUEST_SUCCESS state', () => {
    expect(aspirantRequest([], {
      type: 'REQUEST_SUCCESS',
      payload: ['APC', 'UPN', 'PDP'],
    })).toEqual({
      requesting: false,
      requested: true,
      vote: ['APC', 'UPN', 'PDP'],
    });
  });

  it('should return REQUEST_ERROR state', () => {
    expect(aspirantRequest([], {
      type: 'REQUEST_ERROR',
      payload: 'Error requesting data',
    })).toEqual(
      {
        requesting: false,
        requested: false,
        error: 'Error requesting data',
      },
    );
  });

  it('should return REQUEST_ERROR_CATCH state', () => {
    expect(aspirantRequest([], {
      type: 'REQUEST_ERROR_CATCH',
      payload: 'Error requesting data',
    })).toEqual(
      {
        requesting: false,
        requested: false,
        error: 'Error requesting data',
      },
    );
  });
});
