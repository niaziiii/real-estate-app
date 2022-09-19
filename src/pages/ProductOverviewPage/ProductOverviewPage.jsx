import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { Overview, Footer, HeaderImage, Product } from "../../components/index";
import { getItems } from '../../components/Helper';

function ProductOverviewPage() {
  let { productId } = useParams();
  const [property, setProperty] = useState(null)
  const [others, setOthers] = useState(null)

  useEffect(() => {
    async function getProperties() {
      try {
        const data = await getItems(`http://127.0.0.1:4000/api/v1/${productId}`)
        if (data) {
          setProperty(data.data)
          setOthers(null)
        }
      } catch (error) {
        getItems(`http://127.0.0.1:4000/api/v1?limit=3`).then((data) => {
          setOthers(data.data)
          setProperty(null)
        })
      }

    }
    getProperties()
  }, [productId])

  return (
    <div>
      <HeaderImage />
      {property ?
        <Overview property={property} />
        : ''}
      {others ?
        <div className="app__productOverview__products">
          {others.map((el, i) => {
            return (<div className='app__productOverview__products__items' key={i}>
              <Product data={el} />
            </div>)
          })}
        </div>
        : ''
      }

      <Footer />
    </div>
  )
}

export default ProductOverviewPage
