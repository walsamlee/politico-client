import deleteReducer from '../../../reducers/deletePartyReducer';

describe('party reducer', () => {
  it('should return initial state', () => {
    expect(deleteReducer(undefined, {})).toEqual({
      deleting: false,
      deleted: false,
      party: [],
      error: null,
    });
  });

  it('should return DELETE_PARTY state', () => {
    expect(deleteReducer([], {
      type: 'DELETE_PARTY',
      payload: { deleting: true },
    })).toEqual(
      {
        deleting: true,
      },
    );
  });

  it('should return PARTY_DELETED state', () => {
    expect(deleteReducer([], {
      type: 'PARTY_DELETED',
      payload: ['APC'],
    })).toEqual({
      deleting: false,
      deleted: true,
      party: ['APC'],
    });
  });

  it('should return ERROR_DELETING_PARTY state', () => {
    expect(deleteReducer([], {
      type: 'ERROR_DELETING_PARTY',
      payload: 'Error deleting data',
    })).toEqual(
      {
        deleting: false,
        error: 'Error deleting data',
      },
    );
  });
});
