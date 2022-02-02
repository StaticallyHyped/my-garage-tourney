import PlayersCartActionTypes from "./players-cart.types";
import {
  addItemsToPlayerCart,
  removeItemFromPlayerCart,
  removeItemsFromPlayerCart,
} from "./players-cart.utils";

const INITIAL_STATE = {
  cartItems: [],
};

const playersCartReducer = (state = INITIAL_STATE, action) => {
  //switch on the action types:
  switch (action.type) {
    case PlayersCartActionTypes.UPDATE_PLAYER_CART_ITEMS:
      console.log("UPDATE");
      return {
        ...state,
        cartItems: action.payload,
      };
    case PlayersCartActionTypes.ADD_ITEM: //add the item into the array whenever a user clicks it
      console.log("ADD");
      return {
        ...state,
        //add the existing cart items from state, then cart items from the payload
        cartItems: addItemsToPlayerCart(state.cartItems, action.payload), //include existing cart items,
        //plus whatever new items
      };
    case PlayersCartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromPlayerCart(state.cartItems, action.payload),
      };
    case PlayersCartActionTypes.REMOVE_ITEMS:
      return {
        ...state,
        cartItems: removeItemsFromPlayerCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default playersCartReducer;
