import React, { useEffect, useState } from "react";
import Header from "../../../../components/header/Header";
import Detailtab from "../../components/detailtab/Detailtab";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../../../menupage/navbar";

const CompanyList = () => {
  const [companydata, setcompany] = useState([]);

  const fetchcompanydata = () => {
    fetch("https://64bf85da0d8e251fd110f4d8.mockapi.io/cfa", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // // handle error
      })
      .then((tasks) => {
        setcompany(tasks);
      })
      .catch((error) => {
        // handle error
      });
  };

  useEffect(() => {
    fetchcompanydata();
  }, []);
  return (
    <div>
      <NavBar />
      <div>
        <Header
          name="Company List"
          registerlink="/companyregister"
          listlink="/companylist"
        />

        <Detailtab
          key="0"
          serialno=""
          name="Company Name"
          email="Email"
          country="Country"
          industry="Industry"
        ></Detailtab>

        <Container className="detail_board">
          <div>
            {companydata.map((data) => (
              <Detailtab
                key={data.id}
                serialno={data.id}
                name={data.CompanyName}
                email={data.email}
                country={data.Country}
                industry={data.industry}
              ></Detailtab>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CompanyList;
