import React from "react";

const Services = () => {
  return (
    <div>
      <p className="primary-subheading">Services</p>
      <div className="card-container">
        <div className="card">
          <h3>Option 1</h3>
          <h4>£79.99</h4>
          <p>
            <b>One Hour of Tailored Advice and Support.</b>
            <br />
            Don' t worry if we run over slightly, or if we need to explain or
            clarify things again, we won't charge you any more.
          </p>
        </div>
        <div className="card">
          <h3>Option 2</h3>
          <h4>£299</h4>
          <p>
            <b>We offer 3 x 1 hour Coaching Support Service.</b>
            Helping you write your own ET1 with our expert Coaching Advice and
            Support Service by your side.
          </p>
        </div>
        <div className="card">
          <h3>Option 3</h3>
          <h4>£699</h4>
          <p><b>ET1 Completion Service.</b>
          <br />
          If you'd like us to write your ET1 for you, we're happy to do that also.</p>
        </div>
        <div className="card">
          <h3>Option 4</h3>
          <h4>£899</h4>
          <p><b>Commission an Employment Lawyer through us.</b>
          As we instruct on multiple ET1s every week, we get the best rates for you.</p>
        </div>
      </div>
      <hr className="divider" />
    </div>
  );
};

export default Services;
