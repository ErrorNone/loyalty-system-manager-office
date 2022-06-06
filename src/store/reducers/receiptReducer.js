import { LOAD_RECEIPT} from "../types";

const defaultState = {
  receipts: [],
};

export const receiptReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_RECEIPT:
      return { ...state, receipts: action.payload };
    default:
      return state;
  }
};
