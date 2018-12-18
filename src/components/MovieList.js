import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

import 'bootstrap/dist/css/bootstrap.min.css';

const MovieList = (props) => {
  const movieList = props.movies.map((movie, i) => {
    return <Movie key={i} onSelectMovieCallback={props.onSelectMovieCallback} movie={movie} { ...movie } />
  });

  return (
    <section className="card-columns">
      { movieList }
    </section>
  )
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  onSelectMovieCallback: PropTypes.func.isRequired,
};

export default MovieList;
