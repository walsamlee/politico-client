import { combineReducers } from 'redux';
import parties from './partyReducer';
import login from './loginReducer';
import register from './registerReducer';
import createOffice from './createOfficeReducer';
import createParty from './createPartyReducer';
import candidate from './candidateReducer';
import vote from './voteReducer';

const allReducers = combineReducers({
  parties,
  login,
  register,
  createOffice,
  createParty,
  candidate,
  vote,
});

export default allReducers;
