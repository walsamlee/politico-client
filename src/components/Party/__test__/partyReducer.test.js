import partyReducer from '../../../reducers/partyReducer';

describe('party reducer', () => {
  it('should return initial state', () => {
    expect(partyReducer(undefined, {})).toEqual({
      fetching: false,
      fetched: false,
      parties: [],
      error: null,
    });
  });

  it('should return GET_PARTIES state', () => {
    expect(partyReducer([], {
      type: 'GET_PARTIES',
      payload: { fetching: true },
    })).toEqual(
      {
        fetching: true,
      },
    );
  });

  it('should return PARTIES_RETURNED state', () => {
    expect(partyReducer([], {
      type: 'PARTIES_RETURNED',
      payload: ['APC', 'UPN', 'PDP'],
    })).toEqual({
      fetching: false,
      fetched: true,
      parties: ['APC', 'UPN', 'PDP'],
    });
  });

  it('should return GET_PARTIES_ERROR state', () => {
    expect(partyReducer([], {
      type: 'GET_PARTIES_ERROR',
      payload: 'Error fetching data',
    })).toEqual(
      {
        fetching: false,
        error: 'Error fetching data',
      },
    );
  });
});
