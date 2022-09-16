import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Footer, Filter, HeaderImage, SearchProduct } from '../../components';
import { getItems } from '../../components/Helper';
import Navigation from '../Navigation/Navigation';

function SearchPageProduct() {
  const [properties, setProperties] = useState(null);
  const ref = useLocation()
  console.log(ref.state);

  useEffect(() => {
    async function getProperties() {
      const data = await getItems(`http://127.0.0.1:4000/api/v1?${ref.state}`);
      setProperties(data.data)
    }

    getProperties();
  }, [ref.state])

  return (
    <div className='Search-Product-Page'>
      <Navigation />
      <HeaderImage />
      <SearchProduct />
      {properties ? <Filter data={properties} /> : ''}
      <Footer />
    </div>
  )
}

export default SearchPageProduct
