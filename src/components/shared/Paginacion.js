import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import PropTypes from 'prop-types';


export default function Paginacion({ totalPages, currentPage, paginate, nextPage, prevPage }) {

    let pageNumbers = [];
    for (let number = 1; number <= totalPages; number++) {
        pageNumbers.push(
            <Pagination.Item key={number} active={number === currentPage} onClick={() => paginate(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    const paginationBasic = (
        <Pagination size="sm" className="text-secondary bg-light mb-3 shadow-sm rounded mx-auto p-2">
            <Pagination.Prev onClick={() => prevPage()} />
            {pageNumbers}
            <Pagination.Next onClick={() => nextPage()} />
        </Pagination>
    );

    return (
        paginationBasic
    );
}


Paginacion.propTypes = { totalPages: PropTypes.number.isRequired, };
Paginacion.propTypes = { currentPage: PropTypes.number.isRequired, };
Paginacion.propTypes = { paginate: PropTypes.number.isRequired, };
Paginacion.propTypes = { nextPage: PropTypes.number.isRequired, };
Paginacion.propTypes = { prevPage: PropTypes.number.isRequired, };



// class Paginacion extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     render() {
//         const { totalPages, currentPage, paginate, nextPage, prevPage } = this.props;
//         let pageNumbers = [];
//         for (let number = 1; number <= totalPages; number++) {
//             pageNumbers.push(
//                 <Pagination.Item key={number} active={number === currentPage} onClick={() => paginate(number)}>
//                     {number}
//                 </Pagination.Item>,
//             );
//         }

//         const paginationBasic = (
//             <Pagination size="sm" className="text-secondary bg-light mb-3 shadow-sm rounded mx-auto p-2">
//                 <Pagination.Prev onClick={() => prevPage()} />
//                 {pageNumbers}
//                 <Pagination.Next onClick={() => nextPage()} />
//             </Pagination>
//         );
//         return (
//             paginationBasic
//         );
//     }
// }

// export default Paginacion;