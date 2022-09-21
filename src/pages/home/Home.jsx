import React from 'react'
import { useEffect } from 'react';
import { getItems } from '../../components/Helper';
import { Carousel, SearchProduct, HomePageProducts, Footer, LoadingAnimation } from "../../components/index";

function Home() {
  const [property, setProperty] = React.useState([])
  const [loadingAnimation, setLoadingAnimation] = React.useState(true)


  useEffect(() => {
    async function getProperties() {
      const data = await getItems('https://real-estate-mk.herokuapp.com/api/v1')
      if (data.status === 'success') setTimeout(setLoadingAnimation(false), 1000);
      setProperty(data.data)
    }
    getProperties()
  }, [])


  const carouselData = property.map(el => {
    return ({
      image: el.coverImages[0],
      title: el.nameProperty.slice(0, 32),
      description: el.location
    })
  })

  const sale = property.filter(el => el.type === 'sale')
  const rent = property.filter(el => el.type === 'rent')


  return (
    <div className='Carousel-Home'>
      {loadingAnimation ? <LoadingAnimation /> : ''}

      <Carousel data={carouselData.slice(0, 5)} />
      <SearchProduct />

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

      <Footer />
    </div>
  )
}



export default Home
