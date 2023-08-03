import React from "react";
import NavBar from "./navbar";
import "./styles.css";
import { flag } from "./myconstants";
import ErrorMessage from "./errorpage";

const HomePage = ()=>{
    if(flag===true){
        return (
            
            <div>
                <NavBar/>
                <h1 className="homeMessage">Welcome to home page</h1>
            </div>
        );
    }
    else{
        return (
            <ErrorMessage/>
        );
      
    }
    
       
}

export default HomePage;