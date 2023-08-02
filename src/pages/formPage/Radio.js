import React, { useState } from 'react';

export default function Radio() {
  const [radioButtons, setRadioButtons] = useState([
    { id: 1, value: 'Option 1' },
  ]);

  const addRadioButton = () => {
    if (radioButtons.length >= 5) {
      alert('Maximum 5 options are allowed.');
      return;
    }

    const optionNumber = radioButtons.length + 1; // Calculate the option number

    setRadioButtons([
      ...radioButtons,
      { id: optionNumber, value: `Option ${optionNumber}` },
    ]);
  };

  const deleteRadioButton = () => {
    if (radioButtons.length === 1) {
      alert('There should be at least 1 Radio button.');
      return;
    }

    setRadioButtons(radioButtons.slice(0, radioButtons.length - 1));
  };

  return (
    <div>
      <div className="radio-container">
        {radioButtons.map((radioButton) => (
          <div key={radioButton.id} className="radio-option">
            <input
              type="radio"
              className="form-select-lg mb-3"
              name="group"
              value={radioButton.value}
              id={`radio-option${radioButton.id}`}
            />
            <label htmlFor={`radio-option${radioButton.id}`} />
            <input
              type="text"
              className="form-select-lg mb-3"
              value={radioButton.value}
              id={`text-option${radioButton.id}`}
            />
          </div>
        ))}
      </div>
      <button onClick={addRadioButton} className="btn btn-primary">Add Radio Button</button>
      <button onClick={deleteRadioButton} className="btn btn-primary mx-2">Delete Radio Button</button>
    </div>
  );
}
