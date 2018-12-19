import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };
  }

  onSearchChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });

    this.props.onSearchChangeCallback(event.target.value);
  }

  render() {
    return (
      <section className="SearchBar">
        <input
          onChange={this.onSearchChange}
          value={this.state.searchValue}
          name="search-bar"
          className="search-bar cu-search-input"
          placeholder="Search Movies"
        />
      </section>
    );
  }
}

SearchBar.propTypes = {
  onSearchChangeCallback: PropTypes.func,
};

export default SearchBar;
