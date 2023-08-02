import React, { useState } from 'react';

export default function CheckBox() {
  const maxOptions = 5;
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, value: 'Option 1' },
  ]);

  const addCheckbox = () => {
    if (checkboxes.length >= maxOptions) {
      alert(`Maximum ${maxOptions} options are allowed.`);
      return;
    }

    const optionNumber = checkboxes.length + 1;

    setCheckboxes([
      ...checkboxes,
      { id: optionNumber, value: `Option ${optionNumber}` },
    ]);
  };

  const deleteCheckbox = () => {
    if (checkboxes.length === 1) {
      alert('There should be at least 1 Checkbox.');
      return;
    }

    setCheckboxes(checkboxes.slice(0, checkboxes.length - 1));
  };

  const handleOptionChange = (id, newValue) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, value: newValue } : checkbox
      )
    );
  };

  return (
    <div>
      <div className="checkbox-container">
        {checkboxes.map((checkbox) => (
          <div key={checkbox.id} className="checkbox-option">
            <input
              type="checkbox"
              className="custom-checkbox custom-checkbox-lg"
              name="group"
              value={checkbox.value}
              id={`checkbox-option${checkbox.id}`}
            />
            <label htmlFor={`checkbox-option${checkbox.id}`} />
            <input
              type="text"
              className="form-select-lg mb-3 mx-1"
              value={checkbox.value}
              id={`text-option${checkbox.id}`}
              onChange={(e) => handleOptionChange(checkbox.id, e.target.value)}
            />
          </div>
        ))}
      </div>
      <button onClick={addCheckbox} className="btn btn-primary">
        Add Checkbox
      </button>
      <button onClick={deleteCheckbox} className="btn btn-primary mx-2">
        Delete Checkbox
      </button>
    </div>
  );
}
