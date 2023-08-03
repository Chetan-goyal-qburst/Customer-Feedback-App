import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./detailtab.css";

const Detailtab = (props) => {
  localStorage.setItem("no_of_company", props.serialno);
  localStorage.setItem("no_of_product", props.pserialno);

  let deleteandupdate;
  if (props.className !== "tab-header") {
    deleteandupdate = (
      <Col lg="2">
        <button className="deleteandupdate button-37">Update</button>
        <button className="deleteandupdate button-24">Delete</button>
      </Col>
    );
  }

  return (
    <>
      <Row className={`data-row ${props.className}`}>
        <Col lg="1">{props.serialno}</Col>
        <Col lg="2">{props.name}</Col>
        <Col lg="2">{props.industry}</Col>
        <Col lg="2">{props.country}</Col>
        <Col lg="3">{props.email}</Col>
        {deleteandupdate}
      </Row>
    </>
  );
};

export default Detailtab;
