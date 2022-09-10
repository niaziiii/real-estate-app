import React from 'react'
import { useParams } from 'react-router-dom';

import {Overview,Footer} from "../../components/index";
import Navigation from '../Navigation/Navigation';


function ProductOverviewPage() {
  let { productId } = useParams();

  console.log(productId);
  return (
    <div>
      <Navigation/>
      <Overview/>

      <Footer/>
    </div>
  )
}

export default ProductOverviewPage
