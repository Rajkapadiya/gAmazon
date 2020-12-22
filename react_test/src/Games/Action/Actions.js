import { ADD_TO_CART } from "../Types";

export const addToCart = (gameInfo) => ({
  type: ADD_TO_CART,
  payload: gameInfo,
});