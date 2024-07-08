import React, { useState } from 'react';

function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function countingSort(arr, exp) {
    let output = new Array(arr.length);
    let count = new Array(10).fill(0);

    for (let i = 0; i < arr.length; i++) {
        count[Math.floor(arr[i] / exp) % 10]++;
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
        count[Math.floor(arr[i] / exp) % 10]--;
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }
}

function radixSort(arr) {
    let max = getMax(arr);
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSort(arr, exp);
    }
}

export default function RadixSort() {
    const [change, setChange] = useState("");
    const [result, setResult] = useState("");

    const handleChange = (e) => {
        setChange(e.target.value);
    }

    const handleSubmit = () => {
        let arr = change.split(',').map(num => parseInt(num.trim()));
        radixSort(arr);
        setResult(arr.join(' '));
    }

    return (
        <div id="display">
            <div className="line-container">
                <h2 className='text'>Radix Sort Algorithm</h2>
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
