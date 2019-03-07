import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  usersReducer,
  postsReducer,
});

export default rootReducer;
