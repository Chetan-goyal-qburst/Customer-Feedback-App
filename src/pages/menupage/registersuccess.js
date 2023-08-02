import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Navbar} from 'react-bootstrap';
import "./registersuccess.css";

const RegisterSuccess = ()=>{
    return (
        <div>
            <Navbar className="menubar" expand="lg">
          <Navbar.Brand href="#" id="qburst">QBurst</Navbar.Brand>
          
        </Navbar>
        <p className="registeredMessage">You have registered successfully!<br></br><Link to="/login"><button className="backtologinbtn">Login</button></Link></p>
        
        </div>
    );
}

export default RegisterSuccess;