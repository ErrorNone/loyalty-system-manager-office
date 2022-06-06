import { LOAD_CARDS } from "../types";

const defaultState = {
  cards: [],
};

export const cardsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return { ...state, cards: action.payload };
    default:
      return state;
  }
};
