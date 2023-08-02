import React from "react";
import "./styles.css";
import NavBar from "./navbar";
import {Link} from "react-router-dom";

 const CustomerPage = () =>{
    return(
        <div>
            <NavBar/>
            <Link to="/endpage"><button className="submitbtn">Submit</button></Link> 
        </div>
    );
};

export default CustomerPage;