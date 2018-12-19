import React from 'react';
import './Home.css'
import PropTypes from 'prop-types';

import harry from '../images/harry.png';
import hermione from '../images/hermione.png';
import ron from '../images/ron.png';
import dumbledore from '../images/dumbledore.png';
import snape from '../images/snape.png';
import voldemort from '../images/voldemort.png';

const Home = (props) => {
  return (
    <div className="logo">
      <img src={harry} className={`bobbing-image-slow ${props.class}`} />
      <img src={hermione} className={`bobbing-image-fast ${props.class}`} />
      <img src={ron} className={`bobbing-image-slow ${props.class}`} />
      <img src={dumbledore} className={`bobbing-image-fast ${props.class}`} />
      <img src={snape} className={`bobbing-image-slow ${props.class}`} />
      <img src={voldemort} className={`bobbing-image-fast ${props.class}`} />
    </div>
  );
};

Home.propTypes = {
  class: PropTypes.string
}

export default Home;
