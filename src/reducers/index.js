import { combineReducers } from 'redux';
import parties from './partyReducer';

const allReducers = combineReducers({
  parties,
});

export default allReducers;
