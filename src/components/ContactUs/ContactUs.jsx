import React from 'react'

function ContactUs() {
  return (
    <div className='contactUs'>
      <form action="#" className="contactUs__form">
        <h2>Contact us</h2>
        <input type="text" name='name' placeholder='Enter Your full name'/>
        <input type="email" name='email' placeholder='Enter Your email' />
        <input type="address" name='location' placeholder='Enter Your address' />
        <input type="number" name='phoneNumber' placeholder='Enter Your Number'/>
        <input type="date" name='vistingDate' placeholder='Please Select visting date'/>
        <select name='vistingDate'>
            <option value="morning">Please Select Vist Date</option>
            <option value="morning">Moring</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
        </select>

        <input type="submit" />
      </form>
    </div>
  )
}


export default ContactUs
