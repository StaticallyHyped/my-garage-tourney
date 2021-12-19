import { createSelector } from "reselect";

const selectUser = (state) => state.user;

/** Create a Selector to just update current user from state */
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
