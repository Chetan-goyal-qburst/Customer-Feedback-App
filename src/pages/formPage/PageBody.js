import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './body.css';
import SelectedOption from './SelectedOption';


export default function PageBody() {
  const [formContent, setFormContent] = useState([]);
  const [answerTypes, setAnswerTypes] = useState([]);
 
  const deleteQuestion = (index) => {
    const updatedFormContent = formContent.filter((_, i) => i !== index);
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
            value={answerTypes[formContent.length] || ''}
          >
            <option value="" disabled>Select answer type</option>
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
        <button onClick={() => deleteQuestion(formContent.length - 1)}>Delete</button>
      ),
    };
    setFormContent([...formContent, field]);
    setAnswerTypes([...answerTypes, answerType]); // Save the selected answer type for the current question
  };
  
  const handleAnswerTypeChange = (e, index) => {
    const updatedAnswerTypes = [...answerTypes];
    updatedAnswerTypes[index] = e.target.value;
    setAnswerTypes(updatedAnswerTypes);
  };
  

  




  return (
    <div className="container">
      {
        formContent.map((field, index) =>{
          return(
                  <>
                  <div key={index} className="question-container">
                      <name>{field.name}</name>
                      <label>{field.label}</label>
                      <answer_type>{field.answer_type}</answer_type>
                      <SelectedOption answerType={answerTypes[index]}/>
                      
                    </div>
                     <button onClick={() => deleteQuestion(index)} className="btn btn-primary ">Delete</button>
                     
                    
                    <hr/>
                    
                  </>
          )
        })

      }
      
      <button onClick={()=> addQuestion()}  className="btn btn-primary mb-2 mt-2">Add Another Question</button>
    </div>
  );
}
