import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

import 'bootstrap/dist/css/bootstrap.min.css';

const URL = "https://localhost:3000";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: [],
    };
  }

  componentDidMount() {
    axios.get(URL)
      .then((response) => {
        const movies = response.data.map((movie) => {
          return { ...movie }
        });

        this.setState({
          movieList: movies, masterList: movies
        });
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message,
        });
      });
  }

  onSearchChange = (value) => {
    console.log(value);
    const regex = new RegExp(`${value}`);
    const movieList = this.state.masterList.filter((movie) => {
      return regex.test(`${movie.title}`.toUpperCase());
    });

    this.setState({
      movieList,
    });
  }

  return (
    <SearchBar onSearchChangeCallback={this.onSearchChange} />
  )
}

Search.propTypes = {
  onSearchChangeCallback: PropTypes.func.isRequired,
};

export default Search;
