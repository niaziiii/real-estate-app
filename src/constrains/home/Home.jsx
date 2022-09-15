import React from 'react'
import { useEffect } from 'react';
import { getItems } from '../../components/Helper';
import {Carousel, SearchProduct,HomePageProducts,Footer} from "../../components/index";
import Navigation from '../Navigation/Navigation';

function Home() {
  const [property,setProperty] = React.useState(null)
  useEffect(()=>{
    async function getProperties() {
      const data = await getItems('http://127.0.0.1:4000/api/v1')
      setProperty(data.data)
     }
      getProperties()
  },[])

  return (
    <div className='Carousel-Home'>
      <Navigation/>
      <Carousel/>
      <SearchProduct/>
      <HomePageProducts
      arr={property} 
      title='Rent properties'/>
       {/* <HomePageProducts
      arr={property} 
      title='Sale properties'/>
       <HomePageProducts
      arr={property} 
      title='Rent properties'/> */}

    <Footer/>
    </div>
  )
}



export default Home
