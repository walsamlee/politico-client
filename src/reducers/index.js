import { combineReducers } from 'redux';
import parties from './partyReducer';
import login from './loginReducer';
import register from './registerReducer';

const allReducers = combineReducers({
  parties,
  login,
  register,
});

export default allReducers;
