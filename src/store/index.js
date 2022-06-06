import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cardsReducer, receiptReducer, transactionReducer } from "./reducers";




const rootReduser = combineReducers({
  cards: cardsReducer,
  receipts: receiptReducer,
  transactions: transactionReducer,
});

export const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(thunk))
);
