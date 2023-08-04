import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./detailtab.css";
import { Link } from "react-router-dom";

const Detailtab = (props) => {
  localStorage.setItem("no_of_company", props.serialno);
  localStorage.setItem("no_of_product", props.pserialno);

  function Deleteapi(serialno) {
    console.log(props.api);
    fetch(
      `https://64bf85da0d8e251fd110f4d8.mockapi.io/${props.api}/${serialno}`,
      {
        method: "DELETE",
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  function createdeleteandupdate(serialno) {
    let deleteandupdate;

    if (props.className !== "tab-header") {
      deleteandupdate = (
        <Col lg="2">
          <button className="deleteandupdate button-37">Update</button>
          <button
            onClick={() => {
              Deleteapi(serialno);
            }}
            className="deleteandupdate button-24"
          >
            Delete
          </button>
        </Col>
      );
    }

    return deleteandupdate;
  }

  return (
    <>
      <Link
        className="linkstyle"
        state={{ name: props.name }}
        to={"/description"}
      >
        <Row className={`data-row ${props.className}`}>
          <Col lg="1">{props.serialno}</Col>
          <Col lg="2">{props.name}</Col>
          <Col lg="2">{props.industry}</Col>
          <Col lg="2">{props.country}</Col>
          <Col lg="3">{props.email}</Col>
          {createdeleteandupdate(props.serialno)}
        </Row>
      </Link>
      ;
    </>
  );
};

export default Detailtab;
