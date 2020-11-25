import React from 'react';

function Pagination(props) {
  return (
    <div>
      <button
        onClick={() => props.changePage('previous')}
        className='btn btn-danger'
        style={{ width: 'auto' }}
      >
        Previous
      </button>
      <button
        onClick={() => props.changePage('next')}
        className='btn btn-danger'
        style={{ width: 'auto' }}
      >
        Next
      </button>
      <button
        onClick={() => props.changePage(1)}
        className='btn btn-warning btn-outline-dark'
      >
        1
      </button>
      <button
        onClick={() => props.changePage(2)}
        className='btn btn-warning btn-outline-dark'
      >
        2
      </button>
      <button
        onClick={() => props.changePage(3)}
        className='btn btn-warning btn-outline-dark'
      >
        3
      </button>
      <button
        onClick={() => props.changePage(4)}
        className='btn btn-warning btn-outline-dark'
      >
        4
      </button>
      <button
        onClick={() => props.changePage(5)}
        className='btn btn-warning btn-outline-dark'
      >
        5
      </button>
      <button
        onClick={() => props.changePage(6)}
        className='btn btn-warning btn-outline-dark'
      >
        6
      </button>
      <button
        onClick={() => props.changePage(7)}
        className='btn btn-warning btn-outline-dark'
      >
        7
      </button>
      <button
        onClick={() => props.changePage(8)}
        className='btn btn-warning btn-outline-dark'
      >
        8
      </button>
      <button
        onClick={() => props.changePage(9)}
        className='btn btn-warning btn-outline-dark'
      >
        9
      </button>
    </div>
  );
}

export default Pagination;
