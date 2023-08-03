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
        {/*taking input from user */}
         <input type="file" onChange={handleImage} /><br></br>

         {/*it creates src by URL.createObjectURL(selectedImage)*/}
        {selectedImage && <img className="logouploaded" src={URL.createObjectURL(selectedImage)} alt="Uploaded" />} 
      </div>
    </div>
   );
}

export default ImageUpload;