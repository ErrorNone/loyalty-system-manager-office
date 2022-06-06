import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadReceipt } from "../asyncRequest/loadReceipt";
import Loader from "../components/loader/Loader";
import ReceiptList from "../components/receiptComponents/ReceiptList";
import ErrorPage from "./ErrorPage";

const ReceiptPage = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReceipt());
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const receipts = useSelector((state) => state.receipts.receipts);

  return (
    <Container>
       {loading ? (
        <Loader />
      ) : receipts.length ? (
        <div>
          <h2 className="text-center mb-3">Чеки</h2>
          <ReceiptList />
        </div>
      ) : (
        <ErrorPage />
      )}
    </Container>
  );
};

export default ReceiptPage;
