import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="heading">
      <div className="tab-row">
        <div className="tab">
          <Link to={props.listlink}>
            <h4>List</h4>
          </Link>
        </div>
        <div className="tab">
          <Link to={props.registerlink}>
            <h4>Register</h4>
          </Link>
        </div>
      </div>
      <h2 className="heading-text">{props.name}</h2>
    </div>
  );
};

export default Header;
