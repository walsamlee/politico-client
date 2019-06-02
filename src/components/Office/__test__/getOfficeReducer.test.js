import getOfficeReducer from '../../../reducers/getOfficesReducer';

describe('getOfficeReducer reducer', () => {
  it('should return initial state', () => {
    expect(getOfficeReducer(undefined, {})).toEqual({
      fetching: false,
      fetched: false,
      offices: [],
      error: null,
    });
  });

  it('should return GET_OFFICES state', () => {
    expect(getOfficeReducer([], {
      type: 'GET_OFFICES',
      payload: { fetching: true },
    })).toEqual(
      {
        fetching: true,
      },
    );
  });

  it('should return GET_OFFICES_SUCCESS state', () => {
    expect(getOfficeReducer([], {
      type: 'GET_OFFICES_SUCCESS',
      payload: ['APC', 'UPN', 'PDP'],
    })).toEqual({
      fetching: false,
      fetched: true,
      offices: ['APC', 'UPN', 'PDP'],
    });
  });

  it('should return GET_OFFICES_CATCH state', () => {
    expect(getOfficeReducer([], {
      type: 'GET_OFFICES_CATCH',
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
