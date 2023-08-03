import React from "react";
import { useState } from "react";
import NavBar from "./navbar";
import "./styles.css";

const ImageUpload = ()=>{
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImage = (event)=>{
        const file = event.target.files[0];
        setSelectedImage(file);
    }

   return(
    <div >
     
      <div className="imageupload">
         <input type="file" onChange={handleImage} /><br></br>
         {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Uploaded" />}
      </div>
    </div>
   );
}

export default ImageUpload;