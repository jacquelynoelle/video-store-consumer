import React from 'react';
import './Home.css'

import harry from '../images/harry.png';
import hermione from '../images/hermione.png';
import ron from '../images/ron.png';
import dumbledore from '../images/dumbledore.png';
import snape from '../images/snape.png';
import voldemort from '../images/voldemort.png';

const Home = (props) => {
  return (
    <div>
      <img src={harry} className="bobbing-image-slow" />
      <img src={hermione} className="bobbing-image-fast" />
      <img src={ron} className="bobbing-image-slow" />
      <img src={dumbledore} className="bobbing-image-fast" />
      <img src={snape} className="bobbing-image-slow" />
      <img src={voldemort} className="bobbing-image-fast" />
    </div>
  );
};

export default Home;
