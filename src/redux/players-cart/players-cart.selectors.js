import { createSelector } from "reselect";

const selectPlayersCart = (state) => state.playersCart;

export const selectPlayersCartItems = createSelector(
  [selectPlayersCart],
  (playersCart) => playersCart.cartItems
);
