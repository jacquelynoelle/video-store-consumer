import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './Customer.css';

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
        <section>
          <h3>{ name }</h3>
          { this.state.showDetail &&
            <section>
              <p>{ `${city}, ${state}` }</p>
              <p>{ `Movies checked out: ${customer.movies_checked_out_count}` }</p>
              <ul>{ customer.movies_checked_out.map((rental, i) => {
                  return (<li key={i} className={rental.overdue ? "highlight" : ""}>
                    {`${rental.title}: Due ${rental.due_date}`}
                  </li>)
                }) }</ul>
            </section>
          }
          <button className="btn btn-info btn-sm" onClick={() => {this.props.onSelectCustomerCallback(id, name)}}>
            Select
          </button>
          <button className="btn btn-warning btn-sm" onClick={() => {this.toggleCustomerDetail()}}>
            { this.state.showDetail ? 'Hide Details' : 'Show Details' }
          </button>
        </section>
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
