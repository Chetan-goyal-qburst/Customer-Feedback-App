import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../../../menupage/navbar";
import Header from "../../components/header/Header";
import "./productregistration.css";
import { flag } from "../../../menupage/myconstants";
import ErrorMessage from "../../../menupage/errorpage";

const Productregistration = () => {
  const [file, setfile] = useState();

  function handlefile(event) {
    setfile(event.target.files[0]);
    console.log(event.target.files[0]);
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // 👈️ prevent page refresh
  };

  let no_of_product = localStorage.getItem("no_of_product");
  let product_details = {
    productname: "",
    producttype: "",
    productcountry: "",
    productemail: "",
    productdescription: "",
    id: no_of_product++,
  };

  function addDetail() {
    product_details.productname = document.getElementById("vname").value;
    product_details.productdescription =
      document.getElementById("vdescription").value;
    product_details.producttype = document.getElementById("vtype").value;
    product_details.productcountry = document.getElementById("vcountry").value;
    product_details.productemail = document.getElementById("vemail").value;
  }

  function inputapi() {
    addDetail();
    fetch("https://64bf85da0d8e251fd110f4d8.mockapi.io/productlist", {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(product_details),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((task) => {
        // do something with the new task
      })
      .catch((error) => {
        // handle error
      });
  }
  {/*security check*/}
  if(flag===true){
  return (
    <>
      <NavBar />
      <Header
        name="Product Register"
        registerlink="/productregister"
        listlink="/productlist"
      />
      <Container>
        <form onSubmit={handleSubmit} className="register">
          <table id="table" className="product_list">
            <tr className="label-row">
              <td>Product Name</td>
              <td>
                <input
                  id="vname"
                  type="text"
                  name="myInput"
                  size="20"
                  // onKeyUp="name_validate()"
                />
              </td>
            </tr>
            <tr className="label-row">
              <td>Description</td>
              <td>
                <input
                  id="vdescription"
                  type="text"
                  name="myInput"
                  rows="4"
                  cols="50"
                  // onKeyUp="des_validate()"
                />
              </td>
            </tr>
            <tr className="label-row">
              <td>Type</td>
              <td>
                <input
                  id="vtype"
                  type="text"
                  name="myInput"
                  size="20"
                  // onKeyUp="name_validate()"
                />
              </td>
            </tr>
            <tr className="label-row">
              <td>Country</td>
              <td>
                <input
                  id="vcountry"
                  type="text"
                  name="myInput"
                  size="20"
                  // onKeyUp="name_validate()"
                />
              </td>
            </tr>
            <tr className="label-row">
              <td>Product Logo</td>
              <td>
                <input
                  type="file"
                  id="img"
                  name="img"
                  accept="image/*"
                  onChange={handlefile}
                />
              </td>
            </tr>
            <tr className="label-row">
              <td>Name to be shown in URL</td>
              <td>
                <input
                  id="vnameinlink"
                  type="text"
                  name="myInput"
                  size="20"
                  // onKeyUp="name_validate()"
                />
              </td>
            </tr>

            <tr>
              <td>Product Contact</td>
            </tr>
            <tr>
              <td>First name</td>
              <td>
                <input
                  id="vfname"
                  type="text"
                  name="myInput"
                  size="20"
                  // onKeyUp="name_validate()"
                />
              </td>
            </tr>
            <tr>
              <td>Last name</td>
              <td>
                <input
                  id="vlname"
                  type="text"
                  name="myInput"
                  size="20"
                  // onKeyUp="name_validate()"
                />
              </td>
            </tr>
            <tr>
              <td>Email id</td>
              <td>
                <input type="email" id="vemail" name="email" />
              </td>
            </tr>

            <tr>
              <td>Add more Contacts</td>
            </tr>
          </table>

          <button className="button-7" role="button" onClick={inputapi}>
            Submit
          </button>
        </form>
      </Container>
    </>
  );
  }
  else{
    return (
      <ErrorMessage/>
    );
  }
};

export default Productregistration;
