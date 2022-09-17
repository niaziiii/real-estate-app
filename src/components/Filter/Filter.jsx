import React from 'react'
import Product from '../Product/Product'
function Filter(props) {
  const data = props.data;
  return (
    <>
    <div className='Filter-Product'>
      
      <div className='Filter-Product__container'>
        {
          data.map((el, i) => {
            return <div className='Filter-Product__container__products' key={i}><Product data={el}/></div>
          })
        }
      </div>
    </div>
    </>

  )
}

export default Filter
