import { combineReducers } from 'redux';
import parties from './partyReducer';
import login from './loginReducer';
import register from './registerReducer';
import createOffice from './createOfficeReducer';
import createParty from './createPartyReducer';

const allReducers = combineReducers({
  parties,
  login,
  register,
  createOffice,
  createParty,
});

export default allReducers;
