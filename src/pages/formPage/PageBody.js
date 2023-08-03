import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './body.css';
import SelectedOption from './SelectedOption';
//import Page1 from './Page1';



export default function PageBody() {
  const [formContent, setFormContent] = useState([]);
  const [answerTypes, setAnswerTypes] = useState([]);
  
 
  const deleteQuestion = (index, label) => {
    const updatedFormContent = formContent.filter((question, i) => {
      return i !== index && question.label !== label;
    });
    setFormContent(updatedFormContent);
  };
  
  const addQuestion = (answerType) => {
    const field = {
      name: `${formContent.length + 1}. `,
      label: (
        <input
          type="question"
          className="form-control form-control-lg mt-1 mw"
          placeholder="Write your question here...."
        />
      ),
      answer_type: (
        <div className="answer">
          <select
            className="form-select-lg mb-3"
            onChange={(e) => handleAnswerTypeChange(e, formContent.length)}
           
          >
            <option value="" disabled selected>Select answer type</option>
            <option value="text">Text Box</option>
            <option value="number">Text Box for Numbers</option>
            <option value="textarea">Big Text Area</option>
            <option value="rating">Ratings</option>
            <option value="dropdown">Dropdown</option>
            <option value="radio">Radio Buttons</option>
            <option value="typeahead">TypeAhead</option>
            <option value="checkbox">Checkbox</option>
          </select>
        </div>
      ),
      delete_button: (
        <button onClick={() => deleteQuestion(formContent.index,formContent.label)}>Delete</button>
      ),
    };
    setFormContent([...formContent, field]);
    setAnswerTypes([...answerTypes, answerType]); 
  };
  
  const handleAnswerTypeChange = (e, index) => {
    const updatedAnswerTypes = [...answerTypes];
    updatedAnswerTypes[index] = e.target.value;
    setAnswerTypes(updatedAnswerTypes);
  };


  const saveForm=()=>{
   }
  

  




  return (
    <div className="container">
      {
        formContent.map((field, index) =>{
          return(
                  <>
                  <div key={index} className="question-container" >
                      <name classname="mx-2">{field.name}</name>
                      <label>{field.label}</label>
                      <answer_type>{field.answer_type}</answer_type>
                      <SelectedOption answerType={answerTypes[index]}/>
                      
                    </div>
                     <button onClick={() => deleteQuestion(index, field.label)} className="btn btn-primary ">Delete</button>
                     
                    
                    <hr/>
                    
                  </>
          )
        })

      }
      
      <button onClick={()=> addQuestion()}  className="btn btn-primary mb-2 mt-2">Add Another Question</button>
      <button onClick={()=> saveForm(answerTypes[0])}  className="btn btn-primary mb-2 mt-2 mx-4">Save Form</button>
    </div>
  );
}
