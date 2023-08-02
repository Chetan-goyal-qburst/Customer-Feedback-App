import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./styles.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar className="menubar" expand="lg">
        <Navbar.Brand id="qburst">QBurst</Navbar.Brand>
        <Navbar.Brand as={Link} to="/home" id="qburst">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Actions" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/companylist">
                Company
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/forms">
                Forms
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/customer">
                Customer
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/links">
                Links
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
