import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './body.css';
import SelectedOption from './SelectedOption';
import Page1 from './Page1';



export default function PageBody() {
  const [formContent, setFormContent] = useState([]);
  const [answerTypes, setAnswerTypes] = useState([]);
  const minContainersAllowed = 1; // Minimum number of containers allowed

  useEffect(() => {
    // When the component mounts, set the initial default container
    setFormContent(getDefaultContainer());
  }, []);

  const getDefaultContainer = () => {
    // Create and return the default question container
    return [
      {
        name: '1. ',
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
        
      },
    ];
  };

  const saveQuestion= (index) => {
    const questionInput = formContent[index].label.props.value;
    if (!questionInput || questionInput.trim() === '') {
      alert('The question bar is empty. Please enter a question.');
      return;
    }

    // Remove everything else from the container except sno, question bar, and answer_type
    const updatedFormContent = formContent.map((container, i) => {
      if (i === index) {
        return {
          name: container.name,
          label: container.label,
          answer_type: container.answer_type,
        };
      }
      return container;
    });

    setFormContent(updatedFormContent);
      
  };

  const deleteQuestion = (index) => {
    if (formContent.length <= minContainersAllowed) {
      // Show an alert if there's only one question and prevent deletion
      alert("At least one question is required.");
    } else {
      // Proceed with deletion if there are more than one question
      const updatedFormContent = formContent.filter((_, i) => i !== index);
      setFormContent(updatedFormContent);
    }
  };

  const addQuestion = () => {
    const newIndex = formContent.length;
    const newContainer = {
      name: `${newIndex + 1}. `,
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
    };
    setFormContent([...formContent, newContainer]);
  };

  const handleAnswerTypeChange = (e, index) => {
    const updatedAnswerTypes = [...answerTypes];
    updatedAnswerTypes[index] = e.target.value;
    setAnswerTypes(updatedAnswerTypes);
  };

  const saveForm = () => {
    
  };

  return (
    <div className="container">
      {formContent.map((field, index) => {
        return (
          <div key={index} className="question-container">
            <name className="mx-2">{field.name}</name>
            <label>{field.label}</label>
            <answer_type>{field.answer_type}</answer_type>
            <SelectedOption answerType={answerTypes[index]}/>
            
            <div className="special-button">
            <button className="btn btn-primary"  onClick={ () => saveQuestion(index)}>Save Question</button>
           
            {formContent.length > minContainersAllowed && (
              
                <button onClick={() => deleteQuestion(index)} className="btn btn-primary mx-3">Delete Question</button>
             
            )}
             </div>
            
            <hr />
          </div>
        );
      })}
      <button onClick={addQuestion} className="btn btn-primary mb-2 mt-2">
        Add Another Question
      </button>
      <button
        onClick={() => saveForm(answerTypes[0])}
        className="btn btn-primary mb-2 mt-2 mx-4"
      >
        Save Form
      </button>
    </div>
  );
}
