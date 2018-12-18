import React from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';

import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerList = (props) => {
  const customerList = props.customers.map((customer, i) => {
    return <Customer key={i} onSelectCustomerCallback={props.onSelectCustomerCallback} {...customer} />
  });

  return (
    <div>
      { customerList }
    </div>
  )
}

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
  onSelectCustomerCallback: PropTypes.func.isRequired
};

export default CustomerList;
