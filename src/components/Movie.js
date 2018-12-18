import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Movie.css';

const Movie = (props) => {
  const { title, overview, release_date, inventory, image_url } = props;
  return (
    <section className="movie-card">
      <img src={ image_url } alt={ title } className="movie-card__image" />
      <section className="movie-card__header">
        <h3 className="movie-card__header-title">{ title.length > 30 ? `${title.substring(0, 30)}...` : title }</h3>
        <sub className="movie-card__header-date">{ release_date }</sub>
      </section>
      <section className="movie-card__description">
        { overview.length > 128 ? `${overview.substring(0, 128)}...` : overview}
      </section>
      <section className="movie-card__footer">
        <button className="btn btn-primary">Add</button>
      </section>
    </section>
  );
};

Movie.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  release_date: PropTypes.string,
  inventory: PropTypes.string,
  image_url: PropTypes.string,
}

export default Movie;
