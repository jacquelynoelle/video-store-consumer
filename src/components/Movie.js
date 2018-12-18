import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Movie.css';

const Movie = (props) => {
  const { id, title, overview, release_date, inventory, image_url } = props;
  return (
    <section className="card bg-dark text-white">
      <img src={ image_url } alt={ title } className="card-img card-img-transparent" />
      <section className="card-img-overlay">
        <h3 className="card-title">{ title.length > 30 ? `${title.substring(0, 30)}...` : title }</h3>
        <p className="card-text">{ `Release date: ${release_date}` }</p>
        <p className="card-text">
          { overview.length > 128 ? `${overview.substring(0, 128)}...` : overview}
        </p>
        <button className="btn btn-primary" onClick={() => {props.onSelectMovieCallback(id, title)}}>Add</button>
      </section>
    </section>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  overview: PropTypes.string,
  release_date: PropTypes.string,
  inventory: PropTypes.string,
  image_url: PropTypes.string,
  onSelectMovieCallback: PropTypes.func.isRequired,
}

export default Movie;
