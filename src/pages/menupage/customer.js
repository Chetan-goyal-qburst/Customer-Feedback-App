import React from "react";
import "./styles.css";
import NavBar from "./navbar";
import {Link} from "react-router-dom";

 const CustomerPage = () =>{
    return(
        <div>
            <NavBar/>
            <div className="FeedbackForm">
            <h2>Feedback Form</h2>
            <img src="#" alt="company logo" /><br></br>
            <p><b>Company Name</b></p><hr></hr>
            
            <Link to="/endpage"><button className="submitbtn">Submit</button></Link> 
            </div>
             
        </div>
    );
};

export default CustomerPage;