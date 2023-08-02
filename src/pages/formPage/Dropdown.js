import React, { useState } from 'react';

export default function Dropdown() {
  const [options, setOptions] = useState([]);
  const [optionText, setOptionText] = useState('');

  const deleteDropdownOption = () => {
    const selectedOptionIndex = options.length - 1;
    
    
    if (options.length <= 1) {
      alert('At least one option must remain');
      return;
    }

    
    const updatedOptions = [...options];
    updatedOptions.splice(selectedOptionIndex, 1);
    setOptions(updatedOptions);
  };

  const handleDropdownChange = (event) => {
    const selectedOption = event.target.value;
    console.log('Selected option:', selectedOption);
  };

  const addDropdownOption = () => {
    const optionTextTrimmed = optionText.trim();
    if (optionTextTrimmed === '') {
      return;
    }

    
    if (options.length >= 20) {
      alert('Maximum limit of 20 options reached');
      return;
    }

    
    setOptions([...options, optionTextTrimmed]);

    
    setOptionText('');
  };

  return (
    <div>
      <select className="form-select" onChange={handleDropdownChange}>
        <option disabled selected>
          Select an option
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        type="text"
        className="form-select-lg mb-3 mt-3 mx-3"
        value={optionText}
        onChange={(e) => setOptionText(e.target.value)}
        placeholder={`Enter option ${options.length + 1} text`}
      />
      <br></br>
      <button onClick={addDropdownOption} className="btn btn-primary mx-3">Add Option</button>
      <button onClick={deleteDropdownOption} className="btn btn-primary mx-2">Delete Option</button>
    </div>
  );
}
