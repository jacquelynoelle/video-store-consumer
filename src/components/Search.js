import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieLibrary from './MovieLibrary';


// import 'bootstrap/dist/css/bootstrap.min.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: [],

    };
  }

  componentDidMount() {
    this.setState({
      movieList: this.props.movieMasterList,
    })
  }

  onSearchChange = (value) => {
    console.log(value);
    const regex = new RegExp(`${value}`.toUpperCase());
    const movieList = this.props.movieMasterList.filter((movie) => {
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
  movieMasterList: PropTypes.array.isRequired,
};

export default Search;
