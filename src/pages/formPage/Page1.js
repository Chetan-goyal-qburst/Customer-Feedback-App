
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './header.css'; 
import PageBody from './PageBody';

export default function Page1() {

const [title,setTitle]=useState("Untitled Form");
const [description, setDescription]=useState("Form Description");

let finalTitle=title;
let finalDescription= description;

const handleTitleChange = (event) => {
setTitle(event.target.textContent);
finalTitle=title;
}

const handleDescriptionChange = (event) => {
setDescription(event.target.textContent);
finalDescription=description;
} 


const saveForm = () => {

  const formData = {
    title: finalTitle,
    description: finalDescription,
  };

  // Mock API endpoint (replace with your actual API endpoint)
  const mockApiUrl = "https://localhost:44366/api/Forms";

  // Make a POST request to the mock API with the form data
  fetch(mockApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
        // Show the prompt
        const promptMessage = `Form is created successfully!\nForm Title: ${data.title}\nForm Description: ${data.description}`;
        alert(promptMessage);
    })
    .catch((error) => {
      console.error("Error saving form:", error);
      // Handle error scenarios here
    });


};
  return (
<>
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
   <PageBody saveForm={saveForm}/>
</>
  );
}