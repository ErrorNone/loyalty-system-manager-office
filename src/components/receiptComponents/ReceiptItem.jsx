import React from "react";
import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { convertionDate } from "../../function/convertionDate";
const ReceiptItem = ({ receipt, index }) => {

  return (
    <Col xs={12} md={9} lg={6} xxl={4}>
      <Card className="mb-3">
        <Card.Header>
          <h5>Чек №{index + 1}</h5>
        </Card.Header>
        <ListGroup>
          <ListGroupItem>
            <h6>
              <strong>ID аккаунта: </strong>
              {receipt.account_id}
            </h6>
          </ListGroupItem>
          <ListGroupItem>
            <h6>
              <strong>Начислено бонусов: </strong>
              {receipt.bonus}
            </h6>
          </ListGroupItem>
          <ListGroupItem>
            <h6>
              <strong>Списано бонусов: </strong>
              {receipt.payment}
            </h6>
          </ListGroupItem>
          <ListGroupItem>
            <h6>
              <strong>Дата покупки: </strong>
              {convertionDate (receipt.period)}
            </h6>
          </ListGroupItem>
          <ListGroupItem>
            <h6>
              <strong>UID пользователя: </strong>
              {receipt.user_uid}
            </h6>
          </ListGroupItem>
          <ListGroupItem>
            <h6>
              <strong>UUID карты: </strong>
              {receipt.card_uuid}
            </h6>
          </ListGroupItem>
          <ListGroupItem>
            <h6>
              <strong>UUID покупки: </strong>
              {receipt.store_uuid}
            </h6>
          </ListGroupItem>
          <ListGroupItem>
            <h6>
              <strong>UUID: </strong>
              {receipt.uuid}
            </h6>
          </ListGroupItem>
          <ListGroupItem>
            <h6>
              <strong>Стоимость покупки: </strong>
              {receipt.total}
            </h6>
          </ListGroupItem>
          <ListGroupItem>
            <h5>
              <strong>Стоимость покупки c учетом скидки: </strong>
              {receipt.totalWithDiscount}
            </h5>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </Col>
  );
};

export default ReceiptItem;
