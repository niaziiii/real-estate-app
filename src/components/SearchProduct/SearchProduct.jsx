import React from 'react'
import { fieldsObj } from './searchFIelds'
import { Formik } from 'formik';

const options = (obj) => <option key={obj.value} value={obj.value ? obj.value : obj.text}>{obj.text}</option>
const optionsNumber = (num) => <option key={num} value={num}>{num}</option>

const genLink = (p) => {
  let link;
  for (var key of Object.keys(p)) {
    if (p[key] !== '') {
      link += `&${key}=${p[key]}`
    }
  }
  return link;
}



function SearchProduct() {
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
      console.log(genLink(value))

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
          {fieldsObj.minBed.map(el => optionsNumber(el))}
        </select>

        <select
          name="maxBed"
          onChange={formData.handleChange}
          onBlur={formData.handleBlur}
          value={formData.values.maxBed}
        >
          {fieldsObj.maxBed.map(el => optionsNumber(el))}
        </select>

        <select
          name="minPrice"
          onChange={formData.handleChange}
          onBlur={formData.handleBlur}
          value={formData.values.minPrice}
        >
          {fieldsObj.minPrice.map(el => optionsNumber(el))}
        </select>

        <select
          name="maxPrice"
          onChange={formData.handleChange}
          onBlur={formData.handleBlur}
          value={formData.values.maxPrice}
        >

          {fieldsObj.maxPrice.map(el => optionsNumber(el))}
        </select>

        <input type="submit" />
      </form>
      </div>
    </div>
  )
}

export default SearchProduct
