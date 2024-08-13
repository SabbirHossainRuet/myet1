import React from "react";
import legal from "../Assets/legal.jpg";
import Navbar from "./Navbar";

const Mission = () => {
  return (
    <div>
      <Navbar />
      <div className="image-container">
        <img src={legal} alt="" className="fullscreen-image" />
      </div>
      <div className="about-section-container">

        <div className="about-section-text-container">
          <p className="primary-subheading">Mission</p>
          <h1 className="primary-heading">Welcome to MyET1.com</h1>
          <p className="primary-text">
            We're on a mission to help workers take cost effective control of
            their employment disputes, especially where lawyers and law firms
            are too expensive and not a realistic option for many ordinary
            workers.
            <br />
            <br />

            We're here to provide support and practical employment
            advice for everyone, no matter what their financial circumstances.
          </p>
          <p className="primary-text">
            To get started now, download one of our three helpful ET1 guides.
            For one to one advice and support, click on one of our tailored services
            packages. Use the Contact form to get in touch if you have any
            questions.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Mission;
