import React from "react";
import AboutBackground from "../Assets/about-background.png";
import legal from "../Assets/legal.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-section-container">
        <img src={legal} alt="" className="fullscreen-image" />
        <hr className="divider" />

        <div className="about-section-text-container">
          <p className="primary-subheading">About</p>
          <h1 className="primary-heading">Welcome to MyET1</h1>
          <p className="primary-text">
            We're on a mission to help workers take cost effective control of
            their employment disputes, especially where lawyers and law firms
            are too expensive and not a realistic option for many ordinary
            workers. We're here to provide support and practical employment
            advice for everyone, no matter what their financial circumstances.
          </p>
          <p className="primary-text">
            To get started now, download one of our three helpful ET1 guides.
            For one to one advice and support, click on one of tailored services
            packages. Use the Contact form to get in touch if you have any
            questions.
          </p>
          <p className="primary-text">
            At MyET1.com our core services are free for everyone. Our mission is
            to make claiming against your employer easy, straightforward and
            truly affordable. (We really want your case to start off strong and
            have the best chances of winning, that's why we're here.) We also
            know it can feel lonely, be an anxious time and stressful when
            you're fighting your employer, so we're here to support you along
            the way. Get started now by downloading and reading one of our three
            helpful guides.
          </p>
        </div>
      </div>
      <br />
      <hr className="divider" />
    </div>
  );
};

export default About;
