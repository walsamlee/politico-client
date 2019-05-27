import { combineReducers } from 'redux';
import parties from './partyReducer';
import login from './loginReducer';

const allReducers = combineReducers({
  parties,
  login,
});

export default allReducers;
