/* at its core, a Reducer is actually just a function which gets two properties:
a state object, which represents a last/initial state that we're trying to store,
and an action. An action is a type that is a string value. */

import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

/* remember that a reducer gets every 'action' that gets fired, even if it's
not relevant to what we need in this function. A function that gets a user,
but returns an action */
const userReducer = (state = INITIAL_STATE, action) => {
  //based on the action.type, if the case of the action type is one we want,
  //render something. Else, return the state.
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
