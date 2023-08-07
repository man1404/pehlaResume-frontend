import React, { useState } from 'react';
import ".//contact.css";
const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this part with your actual code to handle form submission
    // For this example, we'll just log the form data to the console
    //console.log('Name:', name);
    //console.log('Email:', email);
    //console.log('Message:', message);

    // Clear form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  // Replace the social media URLs with your own
  const socialMediaLinks = {
    facebook: 'https://www.facebook.com/your-page',
    twitter: 'https://www.twitter.com/your-page',
    instagram: 'https://www.instagram.com/your-page',
    linkedin: 'https://www.linkedin.com/company/your-page',
  };

  return (
    <>
    <div className='first'>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Display Social Media Links */}
      <div>
        <p>Follow us on social media:</p>
        <ul>
          <li>
            <a href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href={socialMediaLinks.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </>
  );
};

export default ContactUs;
