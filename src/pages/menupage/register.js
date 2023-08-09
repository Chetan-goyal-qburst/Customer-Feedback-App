import "./styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import RegisterSuccess from "./registersuccess";
import Header from "../../components/header/Header";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    /*pushing data on mockapi*/
    const data = {
      name: name,
      email: email,
      password: password,
    };

    fetch("https://localhost:7039/api/User", {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((task) => {
        window.location.href = "http://localhost:3000/registersuccess";
      })
      .catch((error) => {
        // handle error
      });
  };

  return (
    <div className="registerPage">
      <Navbar className="menubar" expand="lg">
        <Navbar.Brand href="#" id="qburst">
          QBurst
        </Navbar.Brand>
      </Navbar>

      <Header name="Register"></Header>

      <div className="register-container">
        <form onSubmit={handleSubmit}>
          <label className="registerLabel">
            Name:<br></br>
            <input
              className="registerInput"
              type="text"
              placeholder="full name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </label>
          <br></br>
          <br></br>
          <label className="registerLabel">
            Email:<br></br>
            <input
              className="registerInput"
              type="email"
              placeholder="enter email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </label>
          <br></br>
          <br></br>
          <label className="registerLabel">
            Create Password:<br></br>
            <input
              className="registerInput"
              type="password"
              placeholder="create strong password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </label>
          <br></br>
          <br></br>
          <button type="submit" id="loginbtn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
