// ContactPage.js
import React from 'react';
import './ContactPage.css';
import Header from './Header';
function ContactPage() {
  return (
    <><Header />
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h1>Contact Us</h1>
            <p>Email: TrendSphere@example.com</p>
            <p>Phone: 123-456-7890</p>
            <p>Address: 123 Shopping Street, Mumbai, India</p>
          </div>
          <div className="contact-form-container">
            <p>If you have any questions or concerns, feel free to reach out to us using the form below or through our contact information.</p>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </div></>
  );
}

export default ContactPage;
