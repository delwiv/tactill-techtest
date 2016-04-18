import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

import posts from '../reducers/posts';

export default combineReducers({
  routing: routeReducer,
  reduxAsyncConnect,
  posts
});
