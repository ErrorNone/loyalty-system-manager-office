import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadTransaction } from "../asyncRequest";
import Loader from "../components/loader/Loader";
import TransactionList from "../components/transactionComponents/TransactionList";
import ErrorPage from "./ErrorPage";

const TransactionPage = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTransaction());
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const transactions = useSelector((state) => state.transactions.transactions);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : transactions.length ? (
        <div>
          <h2 className="text-center mb-3">Транзакции</h2>
          <TransactionList />
        </div>
      ) : (
        <ErrorPage />
      )}
    </Container>
  );
};

export default TransactionPage;
