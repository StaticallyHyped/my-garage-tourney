import { createSelector } from "reselect";

const selectTourneyCart = (state) => state.tourneyCart;

export const selectTourneyCartItems = createSelector(
  [selectTourneyCart],
  (tourneyCart) => tourneyCart.cartItems
);
