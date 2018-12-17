import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieLibrary from './MovieLibrary';
import axios from 'axios';

// import 'bootstrap/dist/css/bootstrap.min.css';

const URL = "http://localhost:3000";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: [],
      movieMasterList: [],
    };
  }

  componentDidMount() {
    axios.get(URL + "/movies")
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
    const movieList = this.state.movieMasterList.filter((movie) => {
      return regex.test(`${movie.title}`.toUpperCase());
    });

    this.setState({
      movieList,
    });
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
