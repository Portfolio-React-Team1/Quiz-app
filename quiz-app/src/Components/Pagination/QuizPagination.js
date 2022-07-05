import React from 'react'
// import { Pagination } from 'react-bootstrap';

const QuizPagination = ({ questionperpage, totalquestion, paginate }) => {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalquestion / questionperpage); i++) {
    pageNumbers.push(i);
    
  }

  return (
    <div>
      {/* <Pagination size="lg" bsPrefix='pagination'>
        {
          pageNumbers.map(number => (
            <Pagination.Item key={number}>
              <a href='!#'>
              {number}
              </a>
            </Pagination.Item>
          ))
        }
      </Pagination> */}

      <ul className="pagination" style={{marginLeft: '40%', marginBottom: '0em'}}>
        {
            pageNumbers.map(number => (
              <li className="page-item" key={number}><a className="page-link" href="!#" onClick={() => paginate(number)}>{number}</a></li>
            ))
          }
      </ul>
    </div>
  )
}

export default QuizPagination;