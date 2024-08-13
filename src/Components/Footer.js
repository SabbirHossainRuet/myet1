import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="news-container">
        <div className="left">
          <h2 className="alt">Sign up to our monthly newsletter</h2>
          <p style={{textAlign:"center"}}> Stay up to date with MyET1.com, and how we're supporting UK workers to resolve their employment place disputes.</p>
        </div>
        <div className="right">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Enter your email address</label>
                <input type="text" placeholder="Email Address" id="name" name="name" required />
              </div>
              <button type="submit">Sign up</button>
            </form>
          </div>
      </div>
      <br />
      <hr className="divider" />
      <div className="footer-section-one">
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', margin: 0, padding: 0, color: 'orange' }}>MyET1.com</h1>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Help</span>
          <span>Share</span>
          <span>Careers</span>
          <span>Testimonials</span>
          <span>Address</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>hello@myET1.com</span>
          <span>press@myET1.com</span>
          <span>contact@myET1.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
