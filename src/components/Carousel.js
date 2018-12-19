import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';

const Carousel = (props) => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="3500">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100"
            src="https://wallpapersite.com/images/wallpapers/harry-potter-5000x2700-deathly-hallows-part-2-hermione-emma-watson-152.jpg"
            alt="Harry Potter and the Deathly Hallows: Part 2" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100"
            src="https://otakukart.com/wp-content/uploads/2018/04/Best-Movies-of-2015.jpg"
            alt="Avengers: Age of Ultron" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100"
            src="https://ksassets.timeincuk.net/wp/uploads/sites/55/2018/02/KXC1W2-920x584.jpg"
            alt="Black Panther" />
        </div>
      </div>
    </div>
  )
}

export default Carousel;
