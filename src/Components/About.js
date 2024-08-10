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
          <h1 className="primary-heading">
            Welcome to MyET1
          </h1>
          <p className="primary-text">
            We're on a mission to help workers take control of their employment disputes and provide support for everyone, no matter what their financial circumstances. We're here to help you take cost effective legal action, so your case gets heard.

            Completing a good quality ET1 (which is the initial Claim form to submit your claim to the Employment Tribunal (ET) is more than just starting the ball rolling, it sets out what the legal basis of your claim is that the Tribunal will ultimately decide on (much!) later down the line.
          </p>
          <p className="primary-text">
            An ET1 is without a doubt a very important statement of your claim. It's vital to get your ET1 right to avoid missing strict deadlines to firstly bring a claim, and importantly to avoid only lodging parts of your claim which you cant't change easily later. Often employers will fight tooth and nail not to allow any changes later.

            We know hiring an employment lawyer is expensive and stressful, often costing £200-300 per hour. An ET1 will cost more than £1000 with a lawyer and likely cost a lot more after the reading of documents, taking your instructions and giving you initial advice. This isn't an affordable option or a realistic route for most people.
          </p>
          <p className="primary-text">
            At MyET1.com our core services are free for everyone.

            Our mission is to make claiming against your employer easy, straightforward and truly affordable.

            (We really want your case to start off strong and have the best chances of winning, that's why we're here.)

            We also know it can feel lonely, be an anxious time and stressful when you're fighting your employer, so we're here to support you along the way.

            Get started now by downloading and reading one of our three helpful guides.
          </p>
        </div>
      </div>
      <br />
      <hr className="divider" />
    </div>
  );
};

export default About;
