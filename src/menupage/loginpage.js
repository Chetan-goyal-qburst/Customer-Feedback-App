import React from "react";
import GoogleAuthentication from "./googleauth";
import "./loginpage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {useState} from "react";
import HomePage from "./home";

function LoginPage(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange =(event)=>{
    setEmail(event.target.value);
  };

  const handlePasswordChange =(event)=>{
    setPassword(event.target.value);
  };
  const flag=false;
  
  const handleLogin = (event)=>{
   
    event.preventDefault();
   
    
    /*retrieving data from mockapi*/
    fetch('https://64c9352db2980cec85c20b9f.mockapi.io/userdata', {
      method: 'GET',
      headers: {'content-type':'application/json'},
      }).then(res => {
      if (res.ok) {
      return res.json();
      }
      // handle error
      }).then(tasks => {
        
        tasks.forEach(element => {
          if(element.email===email && element.password===password){
            window.location.href = "http://localhost:3000/home";
            flag = true;
          }
        });
        
        if(flag===false)
        {
         alert("Invalid credentials or you have not Registered!");

        } 
      
      }).catch(error => {
      // handle error
    }) 

    

  };

  return (
   
    <div className="loginpage">
       <Navbar className="menubar" expand="lg">
          <Navbar.Brand href="#" id="qburst">QBurst</Navbar.Brand>
          
        </Navbar>


      <h2 className="signin">Sign In</h2>
      <div className="login-container">
        <form onSubmit={handleLogin}>
           <label className="labellogin">Email:<br></br>
                <input 
                 className="InputLogin"
                 type="email" 
                 placeholder="enter your mail"
                 value={email}
                 onChange={handleEmailChange}
                 required
                />
            </label><br></br>
              <br></br>
            
               <label>Password:<br></br>
                  <input 
                    className="InputLogin"
                    type="password" 
                    placeholder="enter password" 
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
               </label><br></br>
            <br></br>
           <button type="submit" id="loginbtn">Login</button>    
        </form>
          <p className="signUpMessage">Don't have an account? Sign Up <Link className="signUpAnchor" to="/register">here</Link></p>
        <span ><GoogleAuthentication/></span> 
      </div>
      
    </div>
    
  );


}

export default LoginPage;