import createPartyReducer from '../../../reducers/createPartyReducer';

describe('party reducer', () => {
  it('should return initial state', () => {
    expect(createPartyReducer(undefined, {})).toEqual({
      creating: false,
      created: false,
      party: [],
      error: null,
    });
  });

  it('should return CREATE_PARTY state', () => {
    expect(createPartyReducer([], {
      type: 'CREATE_PARTY',
      payload: { creating: true },
    })).toEqual(
      {
        creating: true,
      },
    );
  });

  it('should return CREATE_PARTY_SUCCESS state', () => {
    expect(createPartyReducer([], {
      type: 'CREATE_PARTY_SUCCESS',
      payload: ['APC'],
    })).toEqual({
      creating: false,
      created: true,
      party: ['APC'],
    });
  });

  it('should return CREATE_PARTY_INPUT_ERROR state', () => {
    expect(createPartyReducer([], {
      type: 'CREATE_PARTY_INPUT_ERROR',
      payload: 'Error creating data',
    })).toEqual(
      {
        creating: false,
        created: false,
        error: 'Error creating data',
      },
    );
  });

  it('should return CREATE_PARTY_UNAUTHORIZED_ERROR', () => {
    expect(createPartyReducer([], {
      type: 'CREATE_PARTY_UNAUTHORIZED_ERROR',
      payload: 'Error creating data',
    })).toEqual(
      {
        creating: false,
        created: false,
        error: 'Error creating data',
      },
    );
  });

  it('should return CREATE_PARTY_FORBIDDEN_ERROR', () => {
    expect(createPartyReducer([], {
      type: 'CREATE_PARTY_FORBIDDEN_ERROR',
      payload: 'Error creating data',
    })).toEqual(
      {
        creating: false,
        created: false,
        error: 'Error creating data',
      },
    );
  });

  it('should return CREATE_PARTY_ERROR state', () => {
    expect(createPartyReducer([], {
      type: 'CREATE_PARTY_ERROR',
      payload: 'Error creating data',
    })).toEqual(
      {
        creating: false,
        created: false,
        error: 'Error creating data',
      },
    );
  });

  it('should return CREATE_PARTY_ERROR_CATCH state', () => {
    expect(createPartyReducer([], {
      type: 'CREATE_PARTY_ERROR_CATCH',
      payload: 'Error creating data',
    })).toEqual(
      {
        creating: false,
        created: false,
        error: 'Error creating data',
      },
    );
  });
});
