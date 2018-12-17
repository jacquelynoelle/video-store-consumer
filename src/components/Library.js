import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList'
import axios from 'axios';

const URL = "http://localhost:3000";

// import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div>
          <MovieList movies={this.state.libraryList} />
        </div>
      )
    }
}

Library.propTypes = {
};

export default Library;