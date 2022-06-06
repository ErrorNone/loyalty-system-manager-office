import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { loadReceipt, loadTransaction } from "./asyncRequest";
import Header from "./components/Header";
import CardPage from "./pages/CardPage";
import ErrorPage from "./pages/ErrorPage";
import ReceiptPage from "./pages/ReceiptPage";
import TransactionPage from "./pages/TransactionPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReceipt());
  }, []);

  useEffect(() => {
    dispatch(loadTransaction());
  }, []);

  const cards = useSelector((state) => state.cards.cards);
  const receipts = useSelector((state) => state.receipts.receipts);
  const transactions = useSelector((state) => state.transactions.transactions);

  console.log(cards);
  console.log(receipts);
  console.log(transactions);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div style={{paddingTop: "90px", paddingBottom: '20px'}}>
          <Routes>
            <Route path="/" element={<CardPage />} />
            <Route path="/receipt" element={<ReceiptPage />} />
            <Route path="/transaction" element={<TransactionPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
