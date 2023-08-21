import "./styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import RegisterSuccess from "./registersuccess";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const DeletePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [id, setId] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    let flag = false;
    // getting data from database
    fetch("https://localhost:7152/api/User", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((tasks) => {
        tasks.forEach((element) => {
          if (element.email === email && element.password === password) {
            flag = true;
            setId(element.id);

            const encodedEmail = encodeURIComponent(email);
            const url = `https://localhost:7152/api/User/${encodedEmail}`;
            // deleting profile
            fetch(url, {
              method: "DELETE",
              headers: { "content-type": "application/json" },
              // Send your data in the request body as JSON
            })
              .then((res) => {
                if (res.ok) {
                  return res.json();
                }
                // handle error
              })
              .then((task) => {
                alert("Deleted profile!");
              })
              .catch((error) => {
                // handle error
              });
          }
        });
        if (flag === false) alert("Invalid Credentials!");
      })
      .catch((error) => {});

    event.preventDefault();
  };

  return (
    <div className="registerPage">
      <Navbar className="menubar" expand="lg">
        <Navbar.Brand href="#" id="qburst">
          QBurst
        </Navbar.Brand>
      </Navbar>

      <Header name="Delete Profile"></Header>

      <div className="register-container">
        <form onSubmit={handleSubmit}>
          <label className="registerLabel">
            Name:<br></br>
            <input
              className="registerInput"
              type="text"
              placeholder="name"
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
              type={showPassword ? "text" : "password"}
              placeholder="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <button
              className="password-toggle-btn"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </label>
          <br></br>
          <br></br>
          <button type="submit" id="loginbtn">
            Delete
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeletePage;
