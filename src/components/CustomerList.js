import React from 'react';
import PropTypes from 'prop-types';
// import Movie from './Movie';

// import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerList = (props) => {
  const customerList = props.customers.map((customer, i) => {
    return <h2 key={i}>{customer.name}</h2>
  });

  return (
    <div>
      {customerList}
    </div>
  )
}

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
};

export default CustomerList;
