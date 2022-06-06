import React from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import TransactionItem from "./TransactionItem";

const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  return (
    <Row className="justify-content-center">
      {transactions.map((transaction, index) => {
        return (
          <TransactionItem
            transaction={transaction}
            key={transaction.uuid}
            index={index}
          />
        );
      })}
    </Row>
  );
};

export default TransactionList;
