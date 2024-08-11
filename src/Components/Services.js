import React from "react";

const Services = () => {
    return (
        <div>
            <p className="primary-subheading">Services</p>
            <div className="card-container">
                <div className="card">
                    <h3>Option 1</h3>
                    <p>€79.99</p>
                    <p>Example Text</p>
                </div>
                <div className="card">
                    <h3>Option 2</h3>
                    <p>€299</p>
                    <p>Example Text</p>
                </div>
                <div className="card">
                    <h3>Option 3</h3>
                    <p>€699</p>
                    <p>Example Text</p>
                </div>
                <div className="card">
                    <h3>Option 4</h3>
                    <p>€899</p>
                    <p>Example Text</p>
                </div>
            </div>
            <hr className="divider" />
        </div>

    );
};

export default Services;
