import React, { useState } from 'react';
import './linearsearch.css';

const LinearSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = inputValue
      .split(',')
      .map(value => value.trim())
      .filter(value => value !== '');
    performLinearSearch(values, searchValue);
  };

  const performLinearSearch = (values, search) => {
    let foundIndex = -1;
    for (let i = 0; i < values.length; i++) {
      if (values[i] === search) {
        foundIndex = i;
        break;
      }
    }
    if (foundIndex !== -1) {
      setResult(`Found ${search} at index ${foundIndex}`);
    } else {
      setResult(`${search} not found`);
    }
  };

  return (
    <div id="display">
      <div className="line-container">
        <h2 className='text'>Masti with Linear Search</h2>
      <div className="line big-line"></div>
      <div className="line small-line"></div>
    </div>
      <p>Enter numbers separated by comma:</p>
      <div className="spacer"></div>
      <input 
        type="text" 
        className="textbox" 
        value={inputValue} 
        onChange={handleInputChange} 
      />
      <div className="spacer"></div>
      <p>Enter number you want to search:</p>
      <div className="spacer"></div>
      <input 
        type="text" 
        className="textbox" 
        value={searchValue} 
        onChange={handleSearchChange} 
      />
      <div className="spacer"></div>
      <button onClick={handleSubmit} className="btn">
        Submit
      </button>
      <div className="spacer"></div>
      <div id="resultdisplay" className="result">
        {result}
      </div>
    </div>
  );
};

export default LinearSearch;
