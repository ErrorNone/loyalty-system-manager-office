import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadCards } from "../asyncRequest";
import CardList from "../components/cardComponets/CardList";
import Loader from "../components/loader/Loader";
import ErrorPage from "./ErrorPage";
const CardPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(loadCards());
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const cards = useSelector((state) => state.cards.cards);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : cards.length ? (
        <div>
          <h1 className="text-center mb-3">Карты лояльности</h1>
          <CardList />
        </div>
      ) : (
        <ErrorPage />
      )}
    </Container>
  );
};

export default CardPage;
