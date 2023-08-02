import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./detailtab.css";

const Detailtab = (props) => {
  localStorage.setItem("no_of_company", props.serialno);
  localStorage.setItem("no_of_product", props.pserialno);

  return (
    <>
      <Container>
        <Row className="data-row">
          <Col lg="2">
            <h5>{props.serialno}</h5>
          </Col>
          <Col lg="2">{props.name}</Col>
          <Col lg="2">{props.industry}</Col>
          <Col lg="2">{props.country}</Col>
          <Col lg="2">{props.email}</Col>
        </Row>
      </Container>
    </>
  );
};

export default Detailtab;
