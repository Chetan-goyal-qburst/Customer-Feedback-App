import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './header.css'; 

export default function Page1() {

const [title,setTitle]=useState("Untitled Form");
const [description, setDescription]=useState("Form Description");

const handleTitleChange = (event) => {
setTitle(event.target.textContent);
}

const handleDescriptionChange = (event) => {
setDescription(event.target.textContent);
} 
  return (
    <div className="container"> 
        
         <h1
          className="title"
          contentEditable
          onBlur={handleTitleChange}
         
        >
        {title}
        </h1>
        <h5
          className="description"
          contentEditable
          onBlur={handleDescriptionChange}
        >
          {description}
        </h5>
      
    </div>
  );
}
