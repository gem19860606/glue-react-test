import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FILTER_POSTS,
} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function postsReducer(state = initialState.posts, action) {
  
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return objectAssign({}, state, {isLoading: true});

    case FETCH_POSTS_SUCCESS:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return objectAssign({}, state, {items: action.postsData, filteredItems: action.postsData.slice(), isLoading:false});

    case FETCH_POSTS_ERROR:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return objectAssign({}, state, {isError: true, isLoading:false});

    case FILTER_POSTS: 
      {
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
        const filteredItems = state.items.filter(({title}) => {
          return title.toLowerCase().includes(action.filterText.toLowerCase())
        });
        return objectAssign({}, state, {filteredItems, isLoading:false});
     }

    default:
      return state;
  }
}
