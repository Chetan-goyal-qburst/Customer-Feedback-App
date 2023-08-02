import React from "react";
import "./header.css";

const Header = (props) => {
  return (
    <div className="heading">
      <h2 className="heading-pop">{props.name}</h2>
    </div>
  );
};

export default Header;
