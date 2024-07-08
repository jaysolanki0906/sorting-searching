import React, { useState } from 'react'

export default function BubbleSort() {
    const [change,setchange]=useState("");
    const [result,setResult]=useState("");
    const Changefun=(e)=>{
        setchange(e.target.value);
    }
    const Computation_Bubble_Sort=()=>{
        
        let value = change.split(",");
        value = value.map(num => parseFloat(num.trim()));
        for(let i=0;i<value.length;i++)
        {
            for(let j=i+1;j<value.length;j++)
            {
                if(value[i]>value[j])
                {
                    value[i]=value[i]+value[j];
                    value[j]=value[i]-value[j];
                    value[i]=value[i]-value[j];
                }
            }
            value[i]+=" ";
        }
        setResult(value);
    }
  return (
    <div id="display">
        <div className="line-container">
        <h2 className='text'>Masti with Bubble Sort</h2>
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
      <button onClick={Computation_Bubble_Sort} className="btn">
        Submit
      </button>
      <div className="spacer"></div>
      <div id="resultdisplay" className="result">
        {result}
      </div>
    </div>
  )
}
