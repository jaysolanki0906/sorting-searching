import React, { useState } from 'react';

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    
    swap(arr, i + 1, high);
    return i + 1;
}
function quickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);
        
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

export default function QuickSort() {
    const [change, setChange] = useState("");
    const [result, setResult] = useState("");

    const handleChange = (e) => {
        setChange(e.target.value);
    }

    const handleSubmit = () => {
        let arr = change.split(',').map(num => parseInt(num.trim()));
        quickSort(arr, 0, arr.length - 1);
        setResult(arr.join(' '));
    }

    return (
        <div id="display">
            <div className="line-container">
                <h2 className='text'>Masti With Quick Sort</h2>
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
                onChange={handleChange}
                placeholder='Enter values'
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
}
