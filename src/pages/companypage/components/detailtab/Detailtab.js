import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./detailtab.css";

const Detailtab = (props) => {
  localStorage.setItem("no_of_company", props.serialno);
  localStorage.setItem("no_of_product", props.pserialno);

  return (
    <>
      <Row className={`data-row ${props.className}`}>
        <Col lg="2">{props.serialno}</Col>
        <Col lg="2">{props.name}</Col>
        <Col lg="2">{props.industry}</Col>
        <Col lg="2">{props.country}</Col>
        <Col lg="3">{props.email}</Col>
      </Row>
    </>
  );
};

export default Detailtab;
