import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList'
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

const URL = "http://localhost:3000";

class Library extends Component {

  constructor(props) {
      super(props);

      this.state = {
        libraryList: [],
      };
    }

    componentDidMount() {
      axios.get(URL + "/movies")
        .then((response) => {
          const movies = response.data.map((movie) => {
            return { ...movie }
          });

          this.setState({
            libraryList: movies
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
        <div className="ml-3 mr-3">
          <br />
          <h2>Movies for Rent</h2>
          <hr />
          <MovieList movies={this.state.libraryList} onSelectMovieCallback={this.props.onSelectMovieCallback} />
        </div>
      )
    }
}

Library.propTypes = {
  onSelectMovieCallback: PropTypes.func.isRequired,
};

export default Library;
