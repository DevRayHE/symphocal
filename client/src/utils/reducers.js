import { useReducer } from 'react';
import { UPDATE_USER_STATE, UPDATE_CLASS_STATE, TOGGLE_SIGNUP } from './actions';

// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state, action) => {
  switch (action.type) {
    // returns currnet logged in user's info
    case UPDATE_USER_STATE:
      return {
        ...state,
        user: action.user,
      };

    case UPDATE_CLASS_STATE:
      return {
        ...state,
        classes: action.classes,
      };

    // toggle the boolean value of isNewUser
    // case TOGGLE_SIGNUP:
    //   return {
    //     ...state,
    //     // isNewUser: !state.isNewUser,
    //     isNewUser: true,
    //   };

    default:
      return state;
  }
}

export function useAppReducer(initialState) {
  return useReducer(reducer, initialState);
}