import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='container'>
      <div className="contactus-container">
        <h1>Contact Us</h1>
        <p>
          we'd love to hear from you. Please fill out the form below or reach out to us using the contact details provided
        </p>
        <form className='contact-form'>
<div className="form-group">
  <label htmlFor="name">Name:</label>
  <input type="text" id='name' name='name'required />
</div>
<div className="form-group">
  <label htmlFor="email">Name:</label>
  <input type="text" id='email' name='email'required />
</div>
<div className="form-group">
  <label htmlFor="message">Name:</label>
  <textarea id='message' name='message' rows="s" required />
</div>
<button type='submit' className='submit-btn'>Submit</button>
        </form>
      </div>
    

    </div>
  )
}

export default Contact