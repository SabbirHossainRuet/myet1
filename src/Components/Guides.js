import React from "react";

const Guides = () => {
    return (
        <div>
            <p className="primary-subheading">ET1 Guides</p>
            <div className="card-container">
                <div className="card">
                    <h3>Free Guide</h3>
                    <button>Download</button>
                    <p>Example Text</p>
                </div>
                <div className="card">
                    <h3>Guide 2</h3>
                    <h4>£14.99</h4>
                    <button>Download</button>
                    <p>Example Text</p>
                </div>
                <div className="card">
                    <h3>Guide 3</h3>
                    <h4>£19.99</h4>
                    <button>Download</button>
                    <p>Example Text</p>
                </div>
                <div className="card">
                    <h3>Questions and Answers</h3>
                    <h4>£29.99</h4>
                    <button>Download</button>
                    <p>Example Text</p>
                </div>
            </div>
            <br />
            <div className="bundle-card">
                <h3>Buy Bundle 2-4</h3>
                <h4>£49.99</h4>
                <p>(Saving £15.00)</p>
                <button>Download</button>
                <p>Example Text</p>
            </div>
            <hr className="divider" />
        </div>

    );
};

export default Guides;
