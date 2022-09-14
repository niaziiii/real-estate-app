import React from 'react'
import { Footer,Filter,HeaderImage,SearchProduct } from '../../components';
import Navigation from '../Navigation/Navigation';


function SearchPageProduct() {
    

  return (
    <div className='Search-Product-Page'>
      <Navigation/>
      <HeaderImage/>
      <SearchProduct/>
      <Filter/>
      <Footer/>
    </div>
  )
}

export default SearchPageProduct
