import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Customer.css';
import moment from 'moment';

class Customer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetail: false,
    };
  }

  toggleCustomerDetail = () => {
    this.setState({
      showDetail: !this.state.showDetail,
    });
  }

  render () {
    const { customer } = this.props;
    const { id, name, city, state, } = this.props.customer;

    return (
      <section>
        <section className="mb-3">
          <h5>{ name }</h5>
          { this.state.showDetail &&
            <section>
              { `${city}, ${state}` }<br />
              { `Movies checked out: ${customer.movies_checked_out_count}` }
              <ul>{ customer.movies_checked_out.map((rental, i) => {
                  return (<li key={i} className={rental.overdue ? "highlight" : ""}>
                    <strong>{rental.title}</strong>{`: Due ${moment(rental.due_date).format("M/D/YYYY")}`}
                  </li>)
                }) }</ul>
            </section>
          }
          <button className="btn btn-info btn-sm mr-2" onClick={() => {this.props.onSelectCustomerCallback(id, name)}}>
            Select
          </button>
          <button className="btn btn-outline-info btn-sm" onClick={() => {this.toggleCustomerDetail()}}>
            { this.state.showDetail ? 'Hide Details' : 'Show Details' }
          </button>
        </section>
        <hr />
      </section>
    );
  }
}

Customer.propTypes = {
  customer: PropTypes.object.isRequired,
  id: PropTypes.number,
  name: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  movies_checked_out_count: PropTypes.func,
  movies_checked_out: PropTypes.func,
  onSelectCustomerCallback: PropTypes.func.isRequired,
}

export default Customer;
