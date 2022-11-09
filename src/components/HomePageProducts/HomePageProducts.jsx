import React from 'react'
import { Product } from './../index'
import Slider from "react-slick";
import {useNavigate} from 'react-router-dom'

const buttonStyle = {
  background : '#aa9985',
  padding : '.5rem 1.2rem',
  border : 'none',
  outline : 'none',
  cursor : 'pointer',
  fontWeight : '800',
  color : 'white'
}
function HomePageProducts({arr,title,refLink}) {
  const navigate = useNavigate();
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
        <h2 style={{color:'#aa9985', marginBottom:'1rem'}}>{title}</h2>
      <Slider {...settings}>
        {dataArr.map((el, i) => <div className='Product-Container' key={i}><Product data ={el}/></div>)}
      </Slider>
      <button style={buttonStyle} onClick={()=>{
          navigate('/properties',{
            state : refLink
          })
      }}>Check more</button>
    </>
      : ''}
         </div>
  )
}

export default HomePageProducts
