import * as types from '../constants/actionTypes';
import { POSTS_API_URL } from '../constants/apiUrl';
import axios from 'axios';

// example of a thunk using the redux-thunk middleware
export function fetchPosts() {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    axios.get(POSTS_API_URL).then(({data}) => {
      dispatch({
        type: types.FETCH_POSTS_SUCCESS,
        postsData: data,
      });
    }).catch(() => {
      dispatch({
        type: types.FETCH_USERS_ERROR,
      });
    });
    return dispatch({
      type: types.FETCH_POSTS_REQUEST
    });
  };
}
