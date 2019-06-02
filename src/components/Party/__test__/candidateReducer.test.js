import candidateReducer from '../../../reducers/candidateReducer';

describe('candidate reducer', () => {
  it('should return initial state', () => {
    expect(candidateReducer(undefined, {})).toEqual({
      fetching: false,
      fetched: false,
      candidates: [],
      error: null,
    });
  });

  it('should return GET_CANDIDATES state', () => {
    expect(candidateReducer([], {
      type: 'GET_CANDIDATES',
      payload: { fetching: true },
    })).toEqual(
      {
        fetching: true,
      },
    );
  });

  it('should return CANDIDATES_RETURNED state', () => {
    expect(candidateReducer([], {
      type: 'CANDIDATES_RETURNED',
      payload: ['APC'],
    })).toEqual({
      fetching: false,
      fetched: true,
      candidates: ['APC'],
    });
  });

  it('should return GET_CANDIDATES_ERROR state', () => {
    expect(candidateReducer([], {
      type: 'GET_CANDIDATES_ERROR',
      payload: 'Error fetching data',
    })).toEqual(
      {
        fetching: false,
        error: 'Error fetching data',
      },
    );
  });
});
