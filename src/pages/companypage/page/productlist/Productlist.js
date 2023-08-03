import React, { useEffect, useState } from "react";
import NavBar from "../../../menupage/navbar";
import Header from "../../components/header/Header";
import Detailtab from "../../components/detailtab/Detailtab";
import { Col, Container, Row } from "react-bootstrap";


const Productlist = () => {
  const [companydata, setcompany] = useState([]);

  const fetchcompanydata = () => {
    fetch("https://64bf85da0d8e251fd110f4d8.mockapi.io/productlist", {
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
      <div>
        <NavBar />
        <Header
          name="Product List"
          registerlink="/productregister"
          listlink="/productlink"
        />

        <Detailtab
          className="tab-header"
          key="0"
          serialno="Serial no."
          name="Product Name"
          email="Email"
          country="Country"
          industry="Type"
        ></Detailtab>

        <div>
          {companydata.map((data) => (
            <Detailtab
              key={data.id}
              pserialno={data.id}
              serialno={data.id}
              name={data.productname}
              email={data.productemail}
              country={data.productcountry}
              industry={data.producttype}
            ></Detailtab>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default Productlist;
