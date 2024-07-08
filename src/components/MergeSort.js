import React, { useState } from 'react';

function merge(arr, left, mid, right) {
    let n1 = mid - left + 1;
    let n2 = right - mid;

    let L = new Array(n1);
    let R = new Array(n2);

    for (let i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    let i = 0; 
    let j = 0; 
    let k = left; 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(arr, left, right) {
    if (left >= right) return;
    
    let mid = left + Math.floor((right - left) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}

export default function MergeSort() {
    const [change, setChange] = useState("");
    const [result, setResult] = useState("");

    const handleChange = (e) => {
        setChange(e.target.value);
    }

    const handleSubmit = () => {
        let arr = change.split(',').map(num => parseInt(num.trim()));
        mergeSort(arr, 0, arr.length - 1);
        setResult(arr.join(' '));
    }

    return (
        <div id="display">
            <div className="line-container">
                <h2 className='text'>Masti With Merge Sort</h2>
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
