import React from "react";
import {  Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CardItem from "./СardItem";

const CardList = () => {
  const cards = useSelector((state) => state.cards.cards);
  return (
    <Row className="justify-content-center">
      {cards.map((card) => {
        return <CardItem card={card} key={card.uuid} />;
      })}
    </Row>
  );
};

export default CardList;
