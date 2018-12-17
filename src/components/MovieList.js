import React from 'react';
import PropTypes from 'prop-types';
// import Movie from './Movie';

// import 'bootstrap/dist/css/bootstrap.min.css';

const MovieList = (props) => {
  const movieList = props.movies.map((movie, i) => {
    return <h2 key={i}>{movie.title}</h2>
  });

  return (
    <div>
      {movieList}
    </div>
  )
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
