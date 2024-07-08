import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Sidebar(props) {
  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar text-left bg-primary" style={{ width: '280px', height:'694px' }}>
        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
          <span className="fs-4">{props.name}</span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item" style={{marginLeft: '40px' }}>
              Searching
          </li>
          <hr />
          <li>
            <Link to="/binary-search" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
              Binary Search
            </Link>
          </li>
          <li>
            <Link to="/linear-search" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
              Linear Search
            </Link>
          </li>
          <hr/>
          <li className="nav-item" style={{marginLeft: '40px' }}>
              Sorting
          </li>
          <hr/>
          <li>
            <Link to="/bubble-sort" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
              Bubble Sort
            </Link>
          </li>
          <li>
            <Link to="/selection-sort" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
              Selection Sort
            </Link>
          </li>
          <li>
            <Link to="/insertion-sort" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
              Insertion Sort
            </Link>
          </li>
          <li>
            <Link to="/quick-sort" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
              Quick Sort
            </Link>
          </li>
          <li>
            <Link to="/merge-sort" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
              Merge Sort
            </Link>
          </li>
          <li>
            <Link to="/radix-sort" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
              Radix Sort
            </Link>
          </li>
          <li>
            <Link to="/bucket-sort" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
              Bucket Sort
            </Link>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
}
