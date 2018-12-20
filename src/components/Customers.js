import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomerList from './CustomerList'
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

const URL = "http://localhost:3000";

class Customers extends Component {

  constructor(props) {
      super(props);

      this.state = {
        customerList: [],
      };
    }

    componentDidMount() {
      axios.get(URL + "/customers")
        .then((response) => {
          const customers = response.data.map((customer) => {
            return { ...customer }
          });

          this.setState({
            customerList: customers
          });
        })
        .catch((error) => {
          this.setState({
            errorMessage: error.message,
          });
        });
    }

    render () {
      return (
        <div className="ml-3">
          <br />
          <h2>All Customers</h2>
          <hr />
          <CustomerList customers={this.state.customerList} onSelectCustomerCallback={this.props.onSelectCustomerCallback} />
        </div>
      )
    }
}

Customers.propTypes = {
  onSelectCustomerCallback: PropTypes.func.isRequired
};

export default Customers;
