import React, { useState } from 'react';

export default function Dropdown() {
  const [options, setOptions] = useState([]);
  const [optionText, setOptionText] = useState('');

  const deleteDropdownOption = () => {
    const selectedOptionIndex = options.length - 1;
    
    // Check if there is at least one option remaining
    if (options.length <= 1) {
      alert('At least one option must remain');
      return;
    }

    // Remove the selected option
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

    // Check if the maximum limit of options has been reached
    if (options.length >= 20) {
      alert('Maximum limit of 20 options reached');
      return;
    }

    // Add the new option to the options state
    setOptions([...options, optionTextTrimmed]);

    // Clear the input and update the placeholder
    setOptionText('');
  };

  return (
    <div>
      <select className="dropdown" onChange={handleDropdownChange}>
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
        className="form-select-lg mb-3"
        value={optionText}
        onChange={(e) => setOptionText(e.target.value)}
        placeholder={`Enter option ${options.length + 1} text`}
      />
      <button onClick={addDropdownOption} className="btn btn-primary">Add Option</button>
      <button onClick={deleteDropdownOption} className="btn btn-primary mx-2">Delete Option</button>
    </div>
  );
}
