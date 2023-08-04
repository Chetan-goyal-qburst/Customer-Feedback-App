import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './header.css'; 

export default function Page1() {
  const titleRef = useRef();
  const descriptionRef = useRef();

  const [title, setTitle] = useState("Untitled Form");
  const [description, setDescription] = useState("Form Description");

  const handleTitleChange = () => {
    setTitle(titleRef.current.innerText);
  };

  const handleDescriptionChange = () => {
    setDescription(descriptionRef.current.innerText);
  };

  return (
    <div className="container"> 
      <h1
        className="title"
        contentEditable
        onBlur={handleTitleChange}
        ref={titleRef}
      >
        {title}
      </h1>
      <h5
        className="description"
        contentEditable
        onBlur={handleDescriptionChange}
        ref={descriptionRef}
      >
        {description}
      </h5>
    </div>
  );
}
