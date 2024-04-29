import React, { useState } from 'react';
import './ContactPage.css';
import Navbar from '../navbar/Navbar';
import email from './email.png';
import phone from './phone.png';
import address from './address.png';

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    address: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert('Your inquiry has been submitted!');
  };

  return (
    <div>
      <Navbar></Navbar>
    <div className="contact-page">
      <div className="left-panel">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <h3>You can contact us from the following ways!</h3>
          <p><img className="email-logo" src={email} alt="Email icon"/>tis@outlook.com</p>
          <p><img className="phone-logo" src={phone} alt="Phone icon"/>+91 998457548</p>
          <p><img className="address-logo" src={address} alt="address icon"/>Bengaluru, Karnataka</p>
          <div className='circle-small'>
            
          </div>
          <div className='circle-big'>

          </div>
        </div>
      </div>
      <div className="right-panel">
        <h2>Contact Us</h2>
        <form method="POST">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            >
              <option value="">Select Subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Product Support">Product Support</option>
              <option value="Feedback">Feedback</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button  onClick={handleSubmit} type="submit">Send Message</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default ContactPage;
