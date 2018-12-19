import React from 'react';
import './PuppetPals.css'
import PropTypes from 'prop-types';

import harry from '../images/harry.png';
import hermione from '../images/hermione.png';
import ron from '../images/ron.png';
import dumbledore from '../images/dumbledore.png';
import snape from '../images/snape.png';
import voldemort from '../images/voldemort.png';

const PuppetPals = (props) => {
  return (
    <div className="logo">
      <img src={harry} alt="harry" className={`bobbing-image-slow logo-image`} />
      <img src={hermione} alt="hermione" className={`bobbing-image-fast logo-image`} />
      <img src={ron} alt="ron" className={`bobbing-image-slow logo-image`} />
      <img src={dumbledore} alt="dumbledore" className={`bobbing-image-fast logo-image`} />
      <img src={snape} alt="snape" className={`bobbing-image-slow logo-image`} />
      <img src={voldemort} alt="voldemort" className={`bobbing-image-fast logo-image`} />
    </div>
  );
};

PuppetPals.propTypes = {
  class: PropTypes.string
}

export default PuppetPals;
