import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../../../menupage/navbar";
import Header from "../../components/header/Header";
import "./companyregistration.css";

const Companyregistration = () => {
  const [file, setfile] = useState();

  function handlefile(event) {
    setfile(event.target.files[0]);
    console.log(event.target.files[0]);
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // 👈️ prevent page refresh
  };

  let no_of_company = localStorage.getItem("no_of_company");
  let company_details = {
    CompanyName: "",
    Country: "",
    email: "",
    industry: "",
    Description: "",
    Firstname: "",
    Secondname: "",
    nameinlink: "",
    id: no_of_company++,
  };

  function addDetail() {
    company_details.CompanyName = document.getElementById("vname").value;
    company_details.Description = document.getElementById("vdescription").value;
    company_details.industry = document.getElementById("vindustry").value;
    company_details.Country = document.getElementById("vcountry").value;
    company_details.nameinlink = document.getElementById("vnameinlink").value;
    company_details.email = document.getElementById("vemail").value;
    company_details.Secondname = document.getElementById("vfname").value;
    company_details.Firstname = document.getElementById("vlname").value;
  }

  function inputapi() {
    addDetail();
    fetch("https://64bf85da0d8e251fd110f4d8.mockapi.io/cfa", {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(company_details),
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

  return (
    <>
      <NavBar />
      <Header
        name="Company Register"
        registerlink="/companyregister"
        listlink="/companylist"
      />
      <Container>
        <form onSubmit={handleSubmit} className="register">
          <table id="table" className="company_list">
            <tr className="label-row">
              <td>Company Name</td>
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
              <td>Industry</td>
              <td>
                <input
                  id="vindustry"
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
              <td>Company Logo</td>
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
              <td>Company Contact</td>
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
};

export default Companyregistration;
