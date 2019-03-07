import * as types from '../constants/actionTypes';
import axios from 'axios';
import { USERS_API_URL } from '../constants/apiUrl'

// example of a thunk using the redux-thunk middleware
export function fetchUsers() {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    axios.get(USERS_API_URL).then(({data}) => {
      dispatch({
        type: types.FETCH_USERS_SUCCESS,
        userData: data,
      })
    });
    return dispatch({
      type: types.FETCH_USERS_ERROR,
    });
  };
}
