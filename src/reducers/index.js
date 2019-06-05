import { combineReducers } from 'redux';
import parties from './partyReducer';
import login from './loginReducer';
import register from './registerReducer';
import createOffice from './createOfficeReducer';
import createParty from './createPartyReducer';
import candidate from './candidateReducer';
import vote from './voteReducer';
import aspirantRequest from './aspirantRequestReducer';
import getOffices from './getOfficesReducer';
import deleteParty from './deletePartyReducer';
import editParty from './editPartyReducer';

const allReducers = combineReducers({
  parties,
  login,
  register,
  createOffice,
  createParty,
  candidate,
  vote,
  aspirantRequest,
  getOffices,
  deleteParty,
  editParty,
});

export default allReducers;
