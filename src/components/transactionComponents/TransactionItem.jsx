import React from "react";
import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { convertionDate } from "../../function/convertionDate";
const TransactionItem = ({ transaction, index }) => {

  return (
    <Col xs={12} md={9} lg={6} xxl={4}>
      <Card className="mb-3">
        <Card.Header>
          <h5>Транзакция №{index + 1}</h5>
        </Card.Header>
        <ListGroup>
          <ListGroupItem>
            <h6>
              <strong>ID аккаунта: </strong>
              {transaction.account_id}
            </h6>
          </ListGroupItem>
          <ListGroupItem>
            <h6>
              <strong>Дата: </strong>
              {convertionDate (transaction.period)}
            </h6>
          </ListGroupItem>
          <ListGroupItem>
            <h6>
              <strong>UID пользователя: </strong>
              {transaction.user_uid}
            </h6>
          </ListGroupItem>
          <ListGroupItem>
            <h6>
              <strong>UUID карты: </strong>
              {transaction.card_uuid}
            </h6>
          </ListGroupItem>
          <ListGroupItem>
            <h6>
              <strong>UUID: </strong>
              {transaction.uuid}
            </h6>
          </ListGroupItem>
          <ListGroupItem>
            <h5>
              <strong>Сумма: </strong>
              {transaction.delta}
            </h5>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </Col>
  );
};

export default TransactionItem;
