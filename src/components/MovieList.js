import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

import 'bootstrap/dist/css/bootstrap.min.css';

const MovieList = (props) => {
  const movieList = props.movies.map((movie, i) => {
    return <Movie key={i} { ...movie } />
  });

  return (
    <div>
      { movieList }
    </div>
  )
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
