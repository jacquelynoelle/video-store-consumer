import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Movie.css';

const Movie = (props) => {
  const { title, overview, release_date, image_url, movie } = props;
  console.log(movie);
  return (
    <section className="card bg-dark text-white">
      <img src={ image_url } alt={ title } className="card-img card-img-transparent" />
      <section className="card-img-overlay">
        <h3 className="card-title">{ title.length > 30 ? `${title.substring(0, 30)}...` : title }</h3>
        <p className="card-text">{ `Release date: ${release_date}` }</p>
        <p className="card-text">
          { overview.length > 128 ? `${overview.substring(0, 128)}...` : overview}
        </p>
        <button className="btn btn-primary" onClick={() => {props.onSelectMovieCallback(movie)}}>
          Add
        </button>
      </section>
    </section>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string,
  release_date: PropTypes.string,
  image_url: PropTypes.string,
  onSelectMovieCallback: PropTypes.func.isRequired,
}

export default Movie;
