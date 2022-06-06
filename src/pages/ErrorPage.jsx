import React from "react";
import { Col, Row } from "react-bootstrap";

const ErrorPage = () => {
  return (
    <Row>
      <Col>
        <h4>
          К сожалению, нам не удалось получить данные c cервера, попробуйте
          обновить страницу, либо вы можете обратиться в службу поддрежки по
          номеру: <a className="link-dark" href="tel: 88005553535">8 (800) 555-35-35</a>
        </h4>
      </Col>
    </Row>
  );
};

export default ErrorPage;
