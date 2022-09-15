import React from 'react'
import { Product } from './../index'
import Slider from "react-slick";

function HomePageProducts({arr,title}) {
  // eslint-disable-next-line 
  const dataArr = arr;
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1264,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className='app__Home-product-slider'>
      {dataArr? 
    <>
        <h2>{title}</h2>
      <Slider {...settings}>
        {dataArr.map((el, i) => <div className='Product-Container' key={i}><Product data ={el}/></div>)}
      </Slider>
      
    </>
      : ''}
         </div>
  )
}

export default HomePageProducts
