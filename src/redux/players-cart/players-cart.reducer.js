import PlayersCartActionTypes from "./players-cart.types";
import {
  addItemsToPlayerCart,
  removeItemFromPlayerCart,
} from "./players-cart.utils";

const INITIAL_STATE = {
  cartItems: [],
};

const playersCartReducer = (state = INITIAL_STATE, action) => {
  //switch on the action types:
  console.log("PC REDUCER 1");
  console.log(action.type);

  switch (action.type) {
    case PlayersCartActionTypes.UPDATE_PLAYER_CART_ITEMS:
      console.log("PC REDUCER");
      return {
        ...state,
        cartItems: action.payload,
      };
    case PlayersCartActionTypes.ADD_ITEM: //add the item into the array whenever a user clicks it
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
    default:
      return state;
  }
};

export default playersCartReducer;
