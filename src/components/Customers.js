import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomerList from './CustomerList'
import axios from 'axios';

const URL = "http://localhost:3000";

// import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div>
          <CustomerList customers={this.state.customerList} />
        </div>
      )
    }
}

Customers.propTypes = {
};

export default Customers;
