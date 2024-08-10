import React from "react";

const Contact = () => {
  return (

    <div className="contact-form-container">
      <h1 className="primary-subheading">Have Question In Mind?</h1>
      <p className="primary-heading">Contact US!</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      
    </div>

  );
};

export default Contact;
