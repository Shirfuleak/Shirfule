import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
});


const handleChange = (e) => {
  setFormData({
      ...formData,
      [e.target.name]: e.target.value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  axios.get('http://localhost:5000/test')
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

    axios.post('http://localhost:5000/submit',formData)
    .then(response => {
        // console.log('Response:', response.data);
        if (response.status === 200) {
          alert('Form submitted successfully!');
      }
    })
    .catch(error => {
        console.error('Error:', error);
    });

};
  return (
    <div className="contact-us container mt-3">
      <div className="row">
        <div className="col-md-6 ">
        <h2 >Contact Us</h2>

        <div className="contact-form" >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name"  value={formData.name}
                onChange={handleChange} name="name"/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" value={formData.email}
                onChange={handleChange} name="email"/>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your message" value={formData.message}
                onChange={handleChange} name="message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}> Send</button>
          </div>

          <div className="contact-info mt-2">
            <p>Address: 123 Farming Lane, Ruralville, Country</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: contact@farmingbusiness.com</p>
          </div>

       
        </div>

        <div className="col-md-6">
          <h3>Our Location</h3>
          <div className="map-container">
            <iframe
              title="Google Map"
               src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15052.691887650028!2d77.75613!3d19.404931!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1f1577cbfc307%3A0x56b4af102fa37908!2sV.k.%20Patil%20Farm!5e0!3m2!1sen!2sin!4v1724411917333!5m2!1sen!2sin" 
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15052.691887650028!2d77.75613!3d19.404931!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1f1577cbfc307%3A0x56b4af102fa37908!2sV.k.%20Patil%20Farm!5e0!3m2!1sen!2sin!4v1724411917333!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>