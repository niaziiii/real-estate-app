import React from 'react'
import { fieldsObj } from './searchFIelds'
import { Formik } from 'formik'
import {useNavigate} from 'react-router-dom'
import {genLink} from '../Helper'

const options = (obj) => <option key={obj.value} value={obj.value}> {obj.text} </option>



function SearchProduct() {
  const navigate = useNavigate();

  const formik = Formik({
    initialValues: {
      location: '',
      type: '',
      minBed: '',
      maxBed: '',
      minPrice: '',
      maxPrice: ''
    },
    onSubmit: async (value) => {
      if(!value || value ===undefined ) return;
      let link = genLink(value);
      if(link === undefined) return
      link = link.slice(10,link.length);
      
      navigate('/properties',{
        state : link
      })
    }
  })

  // getting intance from formik component library
  const formData = formik.props.value;
  return (
    <div className='app__Search'>
      <div className="app__Serach__container">
      <form action="" onSubmit={(e) => {
        e.preventDefault()
        formData.handleSubmit()
      }}>
        <h3>Search for specific property</h3>
        <select name="location"
          onChange={formData.handleChange}
          onBlur={formData.handleBlur}
          value={formData.values.location}
        >
          {fieldsObj.location.map(el => options(el))}
        </select>

        <select
          name="type"
          onChange={formData.handleChange}
          onBlur={formData.handleBlur}
          value={formData.values.type}
        >
          {fieldsObj.type.map(el => options(el))}
        </select>

        <select
          name="minBed"
          onChange={formData.handleChange}
          onBlur={formData.handleBlur}
          value={formData.values.minBed}
        >
          {fieldsObj.minBed.map(el => options(el))}
        </select>

        <select
          name="maxBed"
          onChange={formData.handleChange}
          onBlur={formData.handleBlur}
          value={formData.values.maxBed}
        >
          {fieldsObj.maxBed.map(el => options(el))}
        </select>

        <select
          name="minPrice"
          onChange={formData.handleChange}
          onBlur={formData.handleBlur}
          value={formData.values.minPrice}
        >
          {fieldsObj.minPrice.map(el => options(el))}
        </select>

        <select
          name="maxPrice"
          onChange={formData.handleChange}
          onBlur={formData.handleBlur}
          value={formData.values.maxPrice}
        >

          {fieldsObj.maxPrice.map(el => options(el))}
        </select>

        <input type="submit" />
      </form>
      </div>
    </div>
  )
}

export default SearchProduct
