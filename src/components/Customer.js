import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './Customer.css';

const Customer = (props) => {
  const { id, name, city, state } = props;
  return (
    <section>
      <section>
        <h3>{ name }</h3>
        <p>{ `${city}, ${state}` }</p>
        <button className="btn btn-primary" onClick={() => {props.onSelectCustomerCallback(id, name)}}>Add</button>
      </section>
    </section>
  );
};

Customer.propTypes = {
  id: PropTypes.number.isRequired,
  registered_at: PropTypes.string,
  name: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  postal_code: PropTypes.string,
  phone: PropTypes.string,
  account_credit: PropTypes.number,
  onSelectCustomerCallback: PropTypes.func.isRequired,
}

export default Customer;
