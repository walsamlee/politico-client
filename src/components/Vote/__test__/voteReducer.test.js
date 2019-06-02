import voteReducer from '../../../reducers/voteReducer';

describe('party reducer', () => {
  it('should return initial state', () => {
    expect(voteReducer(undefined, {})).toEqual({
      casting: false,
      casted: false,
      vote: [],
      error: null,
    });
  });

  it('should return CAST_VOTE state', () => {
    expect(voteReducer([], {
      type: 'CAST_VOTE',
      payload: { creating: true },
    })).toEqual(
      {
        casting: true,
      },
    );
  });

  it('should return VOTE_CAST_SUCCESS state', () => {
    expect(voteReducer([], {
      type: 'VOTE_CAST_SUCCESS',
      payload: ['APC'],
    })).toEqual({
      casting: false,
      casted: true,
      vote: ['APC'],
    });
  });

  it('should return VOTE_CAST_ERROR state', () => {
    expect(voteReducer([], {
      type: 'VOTE_CAST_ERROR',
      payload: 'Error casting data',
    })).toEqual(
      {
        casting: false,
        casted: false,
        error: 'Error casting data',
      },
    );
  });

  it('should return VOTE_CAST_UNAUTHORIZED_ERROR', () => {
    expect(voteReducer([], {
      type: 'VOTE_CAST_UNAUTHORIZED_ERROR',
      payload: 'Error casting data',
    })).toEqual(
      {
        casting: false,
        casted: false,
        error: 'Error casting data',
      },
    );
  });

  it('should return VOTE_CAST_ERROR_CATCH state', () => {
    expect(voteReducer([], {
      type: 'VOTE_CAST_ERROR_CATCH',
      payload: 'Error casting data',
    })).toEqual(
      {
        casting: false,
        casted: false,
        error: 'Error casting data',
      },
    );
  });
});
