import TourneyCartActionTypes from "./tourney-cart.types";
import {
  addItemsToTourneyCart,
  removeItemFromTourneyCart,
} from "./tourney-cart.utils";

const INITIAL_STATE = {
  cartItems: [],
};

const tourneyCartReducer = (state = INITIAL_STATE, action) => {
  //switch on the action type: toggle cart hidden, add item to cart
  switch (action.type) {
    case TourneyCartActionTypes.UPDATE_TOURNEY_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case TourneyCartActionTypes.ADD_ITEM: //add the item into the array whenever a user clicks it
      return {
        ...state,
        //add the existing cart items from state, then cart items from the payload
        cartItems: addItemsToTourneyCart(state.cartItems, action.payload), //include existing cart items,
        //plus whatever new items
      };
    case TourneyCartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromTourneyCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default tourneyCartReducer;
