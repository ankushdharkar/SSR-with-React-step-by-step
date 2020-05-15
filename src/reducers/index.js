import { combineReducers } from 'redux';
import allConcertsReducer from './all-concerts';

export default combineReducers({
  allConcerts: allConcertsReducer
});
