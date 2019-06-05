import editPartyReducer from '../../../reducers/editPartyReducer';

describe('party reducer', () => {
  it('should return initial state', () => {
    expect(editPartyReducer(undefined, {})).toEqual({
      editing: false,
      edited: false,
      party: [],
      error: null,
    });
  });

  it('should return EDIT_PARTY_SUCCESS state', () => {
    expect(editPartyReducer([], {
      type: 'EDIT_PARTY_SUCCESS',
      payload: ['APC'],
    })).toEqual({
      editing: false,
      edited: true,
      party: ['APC'],
    });
  });

  it('should return ERROR_DELETING_PARTY state', () => {
    expect(editPartyReducer([], {
      type: 'EDIT_PARTY_INPUT_ERROR',
      payload: 'Error deleting data',
    })).toEqual(
      {
        editing: false,
        edited: false,
        error: 'Error deleting data',
      },
    );
  });

  it('should return EDIT_PARTY_UNAUTHORIZED_ERROR state', () => {
    expect(editPartyReducer([], {
      type: 'EDIT_PARTY_UNAUTHORIZED_ERROR',
      payload: 'Error deleting data',
    })).toEqual(
      {
        editing: false,
        edited: false,
        error: 'Error deleting data',
      },
    );
  });

  it('should return EDIT_PARTY_FORBIDDEN_ERROR state', () => {
    expect(editPartyReducer([], {
      type: 'EDIT_PARTY_FORBIDDEN_ERROR',
      payload: 'Error deleting data',
    })).toEqual(
      {
        editing: false,
        edited: false,
        error: 'Error deleting data',
      },
    );
  });

  it('should return EDIT_PARTY_ERROR_CATCH state', () => {
    expect(editPartyReducer([], {
      type: 'EDIT_PARTY_ERROR_CATCH',
      payload: 'Error deleting data',
    })).toEqual(
      {
        editing: false,
        edited: false,
        error: 'Error deleting data',
      },
    );
  });
});
