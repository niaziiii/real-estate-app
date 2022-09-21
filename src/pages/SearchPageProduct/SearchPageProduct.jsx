import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Footer, Filter, HeaderImage, SearchProduct, Pagination,LoadingAnimation } from '../../components';
import { getItems } from '../../components/Helper';

function SearchPageProduct() {
  const [loadingAnimation, setLoadingAnimation] = React.useState(true)
  const [properties, setProperties] = useState([]);
  const [propertiesPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1)


  const ref = useLocation()

  useEffect(() => {
    async function getProperties() {
      const data = await getItems(`https://real-estate-mk.herokuapp.com/api/v1?${ref.state}`);
      if (data.status === 'success') setTimeout(setLoadingAnimation(false), 1000); 
      setProperties(data.data)
    }

    getProperties();
  }, [ref.state])


  const indexOfLastPage = currentPage * propertiesPerPage;
  const indexOfFirstPage = indexOfLastPage - propertiesPerPage;
  const dataObj = properties.slice(indexOfFirstPage, indexOfLastPage)

  const paginate = (pageNumber) => { setCurrentPage(pageNumber) }
  return (
    <div className='Search-Product-Page'>
      {loadingAnimation ? <LoadingAnimation /> : ''}

      <HeaderImage />
      <SearchProduct />
      <h1 style={{ width: '100%', textAlign: 'center', textTransform: 'capitalize', padding: '2rem 0 0 0' }}>Total result {properties.length}</h1>
      {properties ? <Filter data={dataObj} /> : ''}

      {properties.length ?

        <Pagination
          propertyPerPage={propertiesPerPage}
          totalProperty={properties.length}
          paginate={paginate}
        />
        : ''}

      <Footer />
    </div>
  )
}

export default SearchPageProduct
