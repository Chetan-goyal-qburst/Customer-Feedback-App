import React from "react";
import "./styles.css";
import NavBar from "./navbar";
import {Link} from "react-router-dom";
import ImageUpload from "./imageupload";
import { flag } from "./myconstants";
import ErrorMessage from "./errorpage";

 const CustomerPage = () =>{
    if(flag===true){
        return(
            <div>
                <NavBar/>
                <div className="FeedbackForm">
                <h2>Feedback Form</h2>
                <label>Choose file for logo:</label>
                <ImageUpload/>
                <p><b>Company Name</b></p><hr></hr>
                
                <Link to="/endpage"><button className="submitbtn">Submit</button></Link> 
                </div>
                 
            </div>
        );
    }
    else{
       return(
        <ErrorMessage/>
       );
    }
    
};

export default CustomerPage;