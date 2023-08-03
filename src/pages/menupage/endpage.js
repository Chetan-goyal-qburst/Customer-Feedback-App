import React from "react";
import "./styles.css";
import NavBar from "./navbar";
import {Link} from "react-router-dom";



const EndPage = ()=>{
  
    return(
      <div>
       <NavBar/>
      
        <div className="success">
          <p className="EndMessage">You have successfully <br></br> completed the FEEDBACK</p>
          <p className="EndMessage">For another <br></br> <b>FEEDBACK</b> </p>
          <Link to="/customer"><button className="EndPageBtn">click here</button> </Link> 
        </div>
      </div>
   );
  
  
 
}

export default EndPage;