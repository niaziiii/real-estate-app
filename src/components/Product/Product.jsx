import React from 'react'

import img1 from './../../assests/IMGS/vila1.jpg'

function Product() {
  return (
    <div className='app__Product'>
      <div className="app__Product__container">
    <div className="app__Product__container__img">
        <img src={img1} alt="Products" />
        <p className='slide-bottom'>View Details</p>
    </div>
    <div className="app__Product__container__content">
       <div className="app__Product__container__content__text">
       <h2>spacious-4br-maid-study-shared-pool-gym-3</h2>
        <span>➕ Umm Suqeim, Dubai</span>
        <p><b>AED 300,000</b></p>
       </div>
       <div className="app__Product__container__content__icons"></div>
        
    </div>
        

    </div> 
    </div>
  )
}

export default Product
