import React from "react";
import NavBar from "../../../menupage/navbar";
import Header from "../../../../components/header/Header";
import { useLocation } from "react-router-dom";

const Description = () => {
  const location = useLocation();
  const { name } = location.state;
  return (
    <div>
      <NavBar />
      <Header name={`${name} Description`} />
    </div>
  );
};

export default Description;
