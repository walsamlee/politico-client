import createOfficeReducer from '../../../reducers/createOfficeReducer';

describe('create office reducer', () => {
  it('should return initial state', () => {
    expect(createOfficeReducer(undefined, {})).toEqual({
      creating: false,
      created: false,
      office: [],
      error: null,
    });
  });

  it('should return CREATE_OFFICE state', () => {
    expect(createOfficeReducer([], {
      type: 'CREATE_OFFICE',
      payload: { creating: true },
    })).toEqual(
      {
        creating: true,
      },
    );
  });

  it('should return CREATE_OFFICE_SUCCESS state', () => {
    expect(createOfficeReducer([], {
      type: 'CREATE_OFFICE_SUCCESS',
      payload: ['APC'],
    })).toEqual({
      creating: false,
      created: true,
      office: ['APC'],
    });
  });

  it('should return CREATE_OFFICE_INPUT_ERROR state', () => {
    expect(createOfficeReducer([], {
      type: 'CREATE_OFFICE_INPUT_ERROR',
      payload: 'Error creating data',
    })).toEqual(
      {
        creating: false,
        created: false,
        error: 'Error creating data',
      },
    );
  });

  it('should return CREATE_OFFICE_UNAUTHORIZED_ERROR', () => {
    expect(createOfficeReducer([], {
      type: 'CREATE_OFFICE_UNAUTHORIZED_ERROR',
      payload: 'Error creating data',
    })).toEqual(
      {
        creating: false,
        created: false,
        error: 'Error creating data',
      },
    );
  });

  it('should return CREATE_OFFICE_FORBIDDEN_ERROR', () => {
    expect(createOfficeReducer([], {
      type: 'CREATE_OFFICE_FORBIDDEN_ERROR',
      payload: 'Error creating data',
    })).toEqual(
      {
        creating: false,
        created: false,
        error: 'Error creating data',
      },
    );
  });

  it('should return CREATE_OFFICE_ERROR state', () => {
    expect(createOfficeReducer([], {
      type: 'CREATE_OFFICE_ERROR',
      payload: 'Error creating data',
    })).toEqual(
      {
        creating: false,
        created: false,
        error: 'Error creating data',
      },
    );
  });

  it('should return CREATE_OFFICE_ERROR_CATCH state', () => {
    expect(createOfficeReducer([], {
      type: 'CREATE_OFFICE_ERROR_CATCH',
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
