import React from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ReceiptItem from "./ReceiptItem";

const ReceiptList = () => {
  const receipts = useSelector((state) => state.receipts.receipts);
  return (
    <Row className="justify-content-center">
      {receipts.map((receipt, index) => {
        return <ReceiptItem receipt={receipt} key={receipt.uuid} index={index}/>;
      })}
    </Row>
  );
};

export default ReceiptList;
