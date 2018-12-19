import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';

const Home = (props) => {
  return (
    <Carousel className="home-hero"/>
  );
};

Home.propTypes = {
  class: PropTypes.string
}

export default Home;
