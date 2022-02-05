import { useReducer } from 'react';
import { UPDATE_USER, UPDATE_CLASS, TOGGLE_SIGNUP } from './actions';

// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state, action) => {
  switch (action.type) {
    // returns currnet logged in user's info
    case UPDATE_USER:
      return {

      };

    case UPDATE_CLASS:
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