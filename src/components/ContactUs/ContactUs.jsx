import React from 'react'
import { Formik } from 'formik'
import * as yup from "yup";
import { postItems } from '../Helper';

const validation = {
  name: yup.string().required(),
  location: yup.string().required(),
  email: yup.string().required(),
  phoneNumber: yup.string().required(),
  duration: yup.string().required(),
  vistingDate: yup.string().required(),
}


const handleSubmitEndPoint = async (obj) => {
  try {
    const posted = await postItems('https://real-estate-mk.herokuapp.com/api/v1/visit', obj)
    const { name } = posted.data.data
    alert(`Dear ${name} your request just submited. We will contact you very soon..`)

  } catch (error) {
    console.log(error);
    alert('Kindly Fill Form Correctly')
  }

}
function ContactUs(props) {
  const formik = Formik({
    initialValues: {
      name: '',
      location: '',
      email: '',
      phoneNumber: '',
      duration: '',
      vistingDate: '',
      
    },
    validationSchema: yup.object(validation),
    onSubmit: async (value) => {
      await handleSubmitEndPoint({...value, property :props.id})
      if(props.closeBtn) props.closeBtn()
    }
  })
  const formData = formik.props.value;


  return (
    <div className='contactUs'>
      <form action="#" className="contactUs__form" onSubmit={(e) => {
        e.preventDefault()
        formData.handleSubmit()
      }}>
        <h2>Contact us</h2>
        <input type="text" name='name' placeholder='Enter Your full name' onChange={formData.handleChange} onBlur={formData.handleBlur} value={formData.values.name} />
        <input type="email" name='email' placeholder='Enter Your email' onChange={formData.handleChange} onBlur={formData.handleBlur} value={formData.values.email} />
        <input type="address" name='location' placeholder='Enter Your address' onChange={formData.handleChange} onBlur={formData.handleBlur} value={formData.values.location} />
        <input type="number" name='phoneNumber' placeholder='Enter Your Phone Number' onChange={formData.handleChange} onBlur={formData.handleBlur} value={formData.values.phoneNumber} />
        <input type="date" name='vistingDate' placeholder='Please Select visting date' onChange={formData.handleChange} onBlur={formData.handleBlur} value={formData.values.vistingDate} />
        <select name='duration' onChange={formData.handleChange} onBlur={formData.handleBlur} value={formData.values.duration}>
          <option >Please Select Vist Date</option>
          <option value="Morning">Moring</option>
          <option value="Afternon">Afternoon</option>
          <option value="Evening">Evening</option>
        </select>
        <input type="submit" />
        </form>
        </div>

)}


export default ContactUs
