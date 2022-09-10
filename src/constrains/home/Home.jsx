import React from 'react'
import {Carousel, SearchProduct,HomePageProducts,Footer} from "../../components/index";
import Navigation from '../Navigation/Navigation';
function Home() {
  return (
    <div className='Carousel-Home'>
      <Navigation/>
      <Carousel/>
      <SearchProduct/>
      <HomePageProducts
      arr={[1,2,3,4]} 
      title='Rent properties'/>
       <HomePageProducts
      arr={[1,2,3,4]} 
      title='Rent properties'/>
       <HomePageProducts
      arr={[1,2,3,4]} 
      title='Rent properties'/>

    <Footer/>
    </div>
  )
}



export default Home
