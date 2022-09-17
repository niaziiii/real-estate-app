import React from 'react'
import { FaBed, FaBath,FaLocationArrow } from "react-icons/fa";
import { BsTextareaResize } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


function Product(prop) {
  const navigate = useNavigate();

  const data = prop.data;
  const handlerOverview = ()=>{
    navigate(`/property/${data.id}`)
  }
  return (
    <div className='app__Product' onClick={()=> handlerOverview()}>
      <div className="app__Product__container">
    <div className="app__Product__container__img">
        <img src={data.coverImages[0]} alt="Products" />
        <p className='slide-bottom'>View Details</p>
        <div className="app__Product__container__head">
          <span>
            <b>{data.type}</b>
            <b>{data.category}</b>
            </span>
        </div>
    </div>
    <div className="app__Product__container__content">
       <div className="app__Product__container__content__text">
       <h2>{data.nameProperty}</h2>
        <span className='app__Product__container__content__location'> {<FaLocationArrow/>}{data.location}</span>
        <p><b>AED {data.price}</b></p>
       </div>
       <div className="app__Product__container__content__icons">
        <div className="app__Product__container__content__icons__icon"> <FaBed/> <b>{data.beds}</b></div>
        <div className="app__Product__container__content__icons__icon"> <FaBath/> <b>{data.bathrooms}</b></div>
        <div className="app__Product__container__content__icons__icon"> <BsTextareaResize/> <b>{data.area}</b></div>

       </div>
        
    </div>
        

    </div> 
    </div>
  )
}

export default Product
