import { LOAD_TRANSACTION } from "../types";

const defaultState = {
  transactions: [],
};

export const transactionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_TRANSACTION:
      return { ...state, transactions: action.payload };
    default:
      return state;
  }
};
