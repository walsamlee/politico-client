import { combineReducers } from 'redux';
import parties from './partyReducer';
import login from './loginReducer';
import register from './registerReducer';
import createOffice from './createOfficeReducer';

const allReducers = combineReducers({
  parties,
  login,
  register,
  createOffice,
});

export default allReducers;
