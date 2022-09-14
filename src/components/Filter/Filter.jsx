import React from 'react'
import Product from '../Product/Product'
function Filter() {
  return (
    <div className='Filter-Product'>
      <div className='Filter-Product__container'>
        {
          [1, 2, 3, 4, 5, 6, 4, 3, 23, 2, 4, 34, 24, 2].map((el, i) => {
            return <div className='Filter-Product__container__products' key={i}><Product /></div>
          })
        }
      </div>
    </div>

  )
}

export default Filter
