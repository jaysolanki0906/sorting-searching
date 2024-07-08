import React, { useState } from 'react';

// Function to perform Bucket Sort
function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) return arr;

    let min = arr[0];
    let max = arr[0];

    // Find minimum and maximum values in the array
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
    }

    // Calculate number of buckets
    let bucketCount = Math.floor((max - min) / bucketSize) + 1;
    let buckets = new Array(bucketCount);

    // Initialize buckets
    for (let i = 0; i < bucketCount; i++) {
        buckets[i] = [];
    }

    // Distribute elements into buckets
    for (let i = 0; i < arr.length; i++) {
        let bucketIndex = Math.floor((arr[i] - min) / bucketSize);
        buckets[bucketIndex].push(arr[i]);
    }

    // Sort each bucket using any sorting algorithm (here using insertion sort)
    for (let i = 0; i < buckets.length; i++) {
        buckets[i].sort((a, b) => a - b);
    }

    // Concatenate sorted buckets into arr[]
    let idx = 0;
    for (let i = 0; i < buckets.length; i++) {
        for (let j = 0; j < buckets[i].length; j++) {
            arr[idx++] = buckets[i][j];
        }
    }

    return arr;
}

export default function BucketSort() {
    const [change, setChange] = useState("");
    const [result, setResult] = useState("");

    const handleChange = (e) => {
        setChange(e.target.value);
    }

    const handleSubmit = () => {
        let arr = change.split(',').map(num => parseInt(num.trim()));
        bucketSort(arr);
        setResult(arr.join(' '));
    }

    return (
        <div id="display">
            <div className="line-container">
                <h2 className='text'>Masti with Bucket Sort</h2>
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
