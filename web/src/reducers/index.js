import { combineReducers } from 'redux';

import searchReducer from './search';

export default (state, action) =>
  combineReducers({
    search: searchReducer
  })(state, action);
