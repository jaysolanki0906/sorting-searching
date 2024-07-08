import React, { useState } from 'react'

export default function Selectionsort() {
    const [Change,setChange]=useState("");
    const [result,setResult]=useState("");
    const Changefun=(e)=>{
        setChange(e.target.value);
    }
    const Computation_Selection_Sort=()=>{
        
        let value = Change.split(",");
        value = value.map(num => parseFloat(num.trim()));
        let minind;
        for(let i=0;i<value.length;i++)
        {
            minind=i;
            for(let j=i+1;j<value.length;j++)
            {
                if(value[j]<value[minind])
                { minind=j}
            }
            if (minind !== i) {
                value[i]=value[i]+value[minind];
                value[minind]=value[i]-value[minind];
                value[i]=value[i]-value[minind];
            }
            value[i]+=" ";
        }
        setResult(value);
    }
  return (
    <div id="display">
        <div className="line-container">
        <h2 className='text'>Masti with Selection Sort</h2>
      <div className="line big-line"></div>
      <div className="line small-line"></div>
    </div>
    <div className="spacer"></div>
      <p>Enter numbers separated by comma:</p>
      <div className="spacer"></div>
      <input 
        type="text" 
        className="textbox" 
        value={Change}
        onChange={Changefun}
        placeholder='Enter values'
      />
      <div className="spacer"></div>
      <button onClick={Computation_Selection_Sort} className="btn">
        Submit
      </button>
      <div className="spacer"></div>
      <div id="resultdisplay" className="result">
        {result}
      </div>
    </div>)
}
