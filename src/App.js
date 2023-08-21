import React from "react";
import "../src/pages/menupage/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "../src/components/header/Header";
import useAuth from "../src/pages/menupage/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import HomePage from "../src/pages/menupage/home";
import DeletePage from "./pages/menupage/deleteprofile";
import GoogleAuthentication from "./pages/menupage/googleauth";
import RegisterPage from "../src/pages/menupage/register";
import CompanyList from "./pages/companypage/page/companylist/CompanyList";
import Layout from "./pages/formPage/Layout";
import CustomerPage from "./pages/menupage/customer";
import LinksList from "./pages/preview_dynamicpage/components/LinksList";
import Companyregistration from "./pages/companypage/page/companyregistration/Companyregistration";
import Productlist from "./pages/companypage/page/productlist/Productlist";
import Productregistration from "./pages/companypage/page/productregistration/Productregistration";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  let flag = false;
  const handleLogin = (event) => {
    event.preventDefault();

    /*retrieving data from mockapi*/
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
            setIsLoggedIn(true);
            flag = true;
            alert("Logged In!");
          }
        });
        if (flag === false) alert("Invalid Credentials!");
      })
      .catch((error) => {});
  };

  return (
    <BrowserRouter>
      {!isLoggedIn && (
        <div className="loginpage">
          <Navbar className="menubar" expand="lg">
            <Navbar.Brand href="#" id="qburst">
              QBurst
            </Navbar.Brand>
            <Link to="/deleteprofile">
              <button id="deleteprofile">Delete Profile</button>
            </Link>
          </Navbar>

          <Header name="Login Page" />

          <div className="login-container">
            <form onSubmit={handleLogin}>
              <label className="labellogin">
                Email:<br></br>
                <input
                  className="InputLogin"
                  type="email"
                  placeholder="enter your mail"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </label>
              <br></br>
              <br></br>

              <label>
                Password:<br></br>
                <input
                  className="InputLogin"
                  type={showPassword ? "text" : "password"}
                  placeholder="enter password"
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

              <button type="submit" className="loginbtn">
                Login
              </button>
            </form>

            <p className="signUpMessage">
              Don't have an account? Sign Up<span> </span>
              <Link className="signUpAnchor" to="/register">
                here
              </Link>
            </p>
            <span>
              <GoogleAuthentication />
            </span>
          </div>
        </div>
      )}
      <Routes>
        {isLoggedIn && <Route path="/" element={<HomePage />} />}
        {isLoggedIn && <Route path="/home" element={<HomePage />} />}
        <Route path="/deleteprofile" element={<DeletePage />} />
        <Route path="/register" element={<RegisterPage />} />
        {isLoggedIn && <Route path="/companylist" element={<CompanyList />} />}
        {isLoggedIn && (
          <Route path="/companyregister" element={<Companyregistration />} />
        )}
        {isLoggedIn && <Route path="/formpage" element={<Layout />} />}
        {isLoggedIn && <Route path="/customer" element={<CustomerPage />} />}
        {isLoggedIn && <Route path="/links" element={<LinksList />} />}
        {isLoggedIn && <Route path="/productlist" element={<Productlist />} />}
        {isLoggedIn && (
          <Route path="/productregister" element={<Productregistration />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
