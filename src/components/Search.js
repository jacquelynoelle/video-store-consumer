import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.css';

const URL = "http://localhost:3000";


class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: [],
    };
  }

  componentDidMount() {
    this.getAPImovies('');
  }

  getAPImovies = (value) => {
    axios.get(URL + "/movies", {
        params: {
          query: value
        }
      })
      .then((response) => {
        const movies = response.data.map((movie) => {
          return { ...movie }
        });

        this.setState({
          movieList: movies,
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
    this.getAPImovies(value);
  }

  render () {
    return (
      <div>
        <h2>Movie Search</h2>
        <SearchBar onSearchChangeCallback={this.onSearchChange} />
        <span className="search-results">
          { this.state.movieList.length > 0 && `Showing ${this.state.movieList.length} results` }
        </span>
        <hr />
        <MovieList movies={this.state.movieList} />
      </div>
    )
  }
}

Search.propTypes = {
};

export default Search;
