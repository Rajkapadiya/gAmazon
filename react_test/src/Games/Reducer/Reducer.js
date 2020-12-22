import { ADD_TO_CART } from "../Types";

export const gameInitialState = [];
const gameReducer = (state = gameInitialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, { gameData: action.payload }];
    default:
      return state;
  }
};

export default gameReducer;
