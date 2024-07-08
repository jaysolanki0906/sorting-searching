// src/components/BinarySearch.js
import React, { useState } from 'react';

export default function BinarySearch() {
    const [inputValue, setInputValue] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [result, setResult] = useState('');
    const handleInput=(e)=>{
        setInputValue(e.target.value);
    }

    const handleInputforfind=(e)=>{
        setSearchValue(e.target.value);
    }
    const computation=()=>{
        let value = inputValue.split(',');
        value = value.map(num => parseFloat(num.trim()));
        value.sort((a, b) => a - b);
        const searchNum = parseFloat(searchValue);

        let low=0,high=value.length;
        let bol=false;
        while(low<high)
        {
            let mid=Math.floor(low + (high - low) / 2);
            if(value[mid]===searchNum)
            {
                setResult(`Value found`);
                bol=true;
                break;
            }
            else if(value[mid]<searchValue)
            {
                low=mid+1;

            }else if(value[mid]>searchValue)
            {
                high=mid-1;
            }
        }
        if(bol===false)
        {
            setResult(`Sorry! Result not Found`);
        }

    }

  return (
    <div id="display">
        <div className="line-container">
        <h2 className='text'>Masti with Binary Search</h2>
      <div className="line big-line"></div>
      <div className="line small-line"></div>
    </div>
      <p>Enter numbers separated by comma:</p>
      <div className="spacer"></div>
      <input 
        type="text" 
        className="textbox" 
        value={inputValue} 
        onChange={handleInput}
        placeholder='Enter values'
      />
      <div className="spacer"></div>
      <p>Enter number you want to search:</p>
      <div className="spacer"></div>
      <input 
        type="text" 
        className="textbox" 
        value={searchValue} 
        onChange={handleInputforfind}
        placeholder='Enter value to Search'
      />
      <div className="spacer"></div>
      <button onClick={computation} className="btn">
        Submit
      </button>
      <div className="spacer"></div>
      <div id="resultdisplay" className="result">
        {result}
      </div>
    </div>
  );
}
