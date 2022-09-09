import React from "react";
import Slider from "react-slick";
import { useEffect } from 'react';

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
  const doc = document.getElementsByClassName('Navigation__wraperr')
  const navEl = React.useRef(doc)

  const targetRef = React.useRef(null)
  const callBackFUnction = entires =>{
      const [entry] = entires
      if(entry.isIntersecting){
        navEl.current[0].style.background = 'transparent'
      }
      else{
        navEl.current[0].style.background = '#1480bd'
      }
  }

  useEffect(()=>{
      const option = {
          root : null,
          rootMargin: '10px',
          threshold : .8
      }
      const observer = new IntersectionObserver(callBackFUnction,option);
      const currentTarget = targetRef.current
      if(currentTarget) observer.observe(currentTarget);

      return ()=>{
      if(currentTarget) observer.unobserve(currentTarget);
      }
  // eslint-disable-next-line 
  },[targetRef])


  return (
    <div className="Carousel-Home__container" ref={targetRef}>
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
