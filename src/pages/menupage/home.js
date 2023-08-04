import React, { useContext } from "react";
import NavBar from "./navbar";
import "./styles.css";
import LoginPage from "./loginpage";
import UnAuth from "./unauth";
import DataContext from "./DataContext";

const HomePage = () => {
  return (
    <div>
      <NavBar />

      <h1 className="homeMessage">Welcome to home page</h1>
    </div>
  );
};

export default HomePage;
