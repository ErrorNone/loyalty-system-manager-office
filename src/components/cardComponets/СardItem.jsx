import React from "react";
import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
const CardItem = ({ card }) => {
  return (
    <Col xs={12} md={9} lg={6} xxl={4}>
      <Card className="mb-3">
        <Card.Header>
          <h4>{card.holder ? card.holder : "Карта пользователя" }</h4>
        </Card.Header>
        <ListGroup>
          <ListGroupItem>
            <h6>
              <strong>uuid: </strong>
              {card.uuid}
            </h6>
          </ListGroupItem>
          <ListGroupItem>
            <h6>
              <strong>number: </strong>
              {card.number}
            </h6>
          </ListGroupItem>
          <ListGroupItem>
            <div className="d-flex justify-content-between">
              <Link className="card-link" to="/receipt">
                Чеки
              </Link>
              <Link className="card-link" to="/transaction">
                Транзакции
              </Link>
            </div>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </Col>
  );
};

export default CardItem;
