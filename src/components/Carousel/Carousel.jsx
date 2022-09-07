import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import file from './file'

const settings = {
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

function Carousel() {
  // eslint-disable-next-line 
  const [items,_] = React.useState(file)

  return (
    <div className="Carousel-Home__container">
      <Slider {...settings} className='Carousel-Home__container__carousel'>
        {items.map((el, i) => {
          return (
            <div key={i} className="carouselBox">
              <img src={el.image} alt="images" />
              <div className="carouselBox__content">
              <h1>{el.title}</h1>
              <p>{el.description}</p>
              <a href="/">Discover More</a>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default Carousel
