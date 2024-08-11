import React from "react";

const Contact = () => {
  return (

    <div className="contact-form-container">
      <p className="primary-heading">Contact us</p>
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
          <input type="text" id="message" name="message" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      
    </div>

  );
};

export default Contact;
