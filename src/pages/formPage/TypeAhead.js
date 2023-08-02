import React, { useState } from 'react';

export default function TypeAhead() {
  const maxOptions = 100;
  const [options, setOptions] = useState([]);

  const addOption = () => {
    if (options.length >= maxOptions) {
      alert(`Maximum ${maxOptions} options are allowed.`);
      return;
    }

    const optionNumber = options.length + 1;

    setOptions([...options, `Option ${optionNumber}`]);
  };

  return (
    <div>
      <div className="typeahead-container">
        <input type="text" className="typeahead-input" />

        {options.map((option, index) => (
          <input
            key={index}
            type="text"
            className="typeahead-input"
            placeholder={option}
          />
        ))}
      </div>
      <button onClick={addOption} className="btn btn-primary">Add Option</button>
    </div>
  );
}
