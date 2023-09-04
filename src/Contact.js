// Contact.js
import React from 'react';
 // Import your CSS file for styling
import email from './images/email.png';


const Contact = () => {
  return (
    <div className='total'>
      <section className="contact-container">
        <p className="contact-heading">Let's build<br />something<br /><strong><span>great together.</span></strong></p>
      </section>
      <div className="email-section">
        <img src={email} alt="Email Logo" className="email-logo" />
        <p className="get-text"><span>Get in touch</span></p>
        <p className="email-text">Email</p>
        <p className="email-address">vamshijanagani224@gmail.com</p>
        <hr className="email-divider" />
        <p className="social-text">Mobile</p>
        <p className="insta-name">+91-8919857289</p>
        <hr className="email-divider" />
      </div>
  </div>
  );
};

export default Contact;
