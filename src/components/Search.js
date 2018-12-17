import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieLibrary from './MovieLibrary';
import axios from 'axios';

const URL = "http://localhost:3000";

// import 'bootstrap/dist/css/bootstrap.min.css';

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
        <SearchBar onSearchChangeCallback={this.onSearchChange} />
        <MovieLibrary movies={this.state.movieList} />
      </div>
    )
  }
}

Search.propTypes = {
};

export default Search;
