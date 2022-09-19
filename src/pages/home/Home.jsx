import React from 'react'
import { useEffect } from 'react';
import { getItems } from '../../components/Helper';
import {Carousel, SearchProduct,HomePageProducts,Footer} from "../../components/index";

function Home() {
  const [property,setProperty] = React.useState([])
  useEffect(()=>{
    async function getProperties() {
      const data = await getItems('http://127.0.0.1:4000/api/v1')
      setProperty(data.data)
     }
      getProperties()
  },[])


  const carouselData = property.map(el =>{
    return({
      image : el.coverImages[0],
      title : el.nameProperty.slice(0,32),
      description : el.location
    })
  })

  const sale = property.filter(el => el.type === 'sale')
  const rent = property.filter(el => el.type === 'rent')
  return (
    <div className='Carousel-Home'>
      <Carousel data={carouselData.slice(0,5)}/>
      <SearchProduct/>

      <HomePageProducts
      arr={sale} 
      title='Properties available for sale'
      refLink={'type=sale'}
      />
      
      <HomePageProducts
      arr={rent} 
      title='Properties available for rent'
      refLink={'type=rent'}
      />
      
      

    <Footer/>
    </div>
  )
}



export default Home
