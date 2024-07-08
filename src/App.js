import React from 'react';
import ParticleComponent from './components/ParticleComponent';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import LinearSearch from './components/LinearSearch'; // Correct import for LinearSearch
import BinarySearch from './components/BinarySearch'; // Import BinarySearch

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BubbleSort from './components/BubbleSort';
import Selectionsort from './components/Selectionsort';
import InsertationSort from './components/InsertationSort';
import QuickSort from './components/QuickSort';
import MergeSort from './components/MergeSort';
import RadixSort from './components/RadixSort';
import BucketSort from './BucketSort';

function App() {
  return (
    <>
      <Router>
        <div className="app" style={{ display: 'flex' }}>
          <Header title="Welcome for Sorting Searching Masti" />
          <Sidebar name="Sorting Searching Masti" />
          <div style={{ flex: 1, marginLeft: '250px', padding: '20px' }}>
            <ParticleComponent id="particles" width="10%" height="10vh" />
          </div>
        </div>

        {/* Routes Configuration */}
        <Routes>
          <Route path="/linear-search" element={<LinearSearch />} />
          <Route path="/binary-search" element={<BinarySearch />} />
          <Route path="/bubble-sort" element={<BubbleSort />} />
          <Route path="/selection-sort" element={<Selectionsort />} />
          <Route path="/insertion-sort" element={<InsertationSort />} />
          <Route path="/quick-sort" element={<QuickSort />} />
          <Route path="/merge-sort" element={<MergeSort />} />
          <Route path="/radix-sort" element={<RadixSort />} />
          <Route path="/bucket-sort" element={<BucketSort />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
