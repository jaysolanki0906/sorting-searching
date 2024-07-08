import React, { useState } from 'react'

export default function InsertationSort() {
    const [change,setchange]=useState("");
    const [result,setResult]=useState("");
    const Changefun=(e)=>{
        setchange(e.target.value);
    }
    const Computation_inseratation_Sort=()=>{
        
        let value = change.split(",");
        value = value.map(num => parseFloat(num.trim()));
        let j=0
        for(let i=1;i<value.length;i++)
        {
            let key=value[i];
            j=i-1;
            while (j >= 0 && value[j] > key) {
                value[j + 1] = value[j];
                j = j - 1;
            }
            value[j + 1] = key;
        }
        setResult(value.join(" "));
    }
  return (
    <div id="display">
        <div className="line-container">
        <h2 className='text'>Masti with Insertation Sort</h2>
      <div className="line big-line"></div>
      <div className="line small-line"></div>
    </div>
    <div className="spacer"></div>
      <p>Enter numbers separated by comma:</p>
      <div className="spacer"></div>
      <input 
        type="text" 
        className="textbox" 
        value={change}
        onChange={Changefun}
        placeholder='Enter values'
      />
      <div className="spacer"></div>
      <button onClick={Computation_inseratation_Sort} className="btn">
        Submit
      </button>
      <div className="spacer"></div>
      <div id="resultdisplay" className="result">
        {result}
      </div>
    </div>
  )
}
