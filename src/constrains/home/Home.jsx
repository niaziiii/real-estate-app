import React from 'react'
import {Carousel, SearchProduct,HomePageProducts} from "../../components/index";

function Home() {
  return (
    <div className='Carousel-Home'>
      <Carousel/>
      <SearchProduct/>
      <HomePageProducts
      arr={[1,2,3,4]} title='Rent properties'/>

    </div>
  )
}



export default Home
