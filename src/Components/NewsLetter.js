import React, { useState } from "react";
import Modal from "./Modal";

const NewsLetter = () => {
    const [email, setEmail] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            setIsModalOpen(true);
        } else {
            alert("Please enter a valid email address.");
        }
    };

    const handleConfirm = () => {
        if (isConfirmed) {
            setIsModalOpen(false);
            setIsSubmitted(true);
            console.log("Email confirmed:", email);
            // Add logic to submit the email to your server here
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="footer-wrapper">
            <div className="news-container">
                <div className="left">
                    <h2 className="alt">Sign up to our monthly Newsletter</h2>
                    <p style={{ textAlign: "center" }}>
                        Stay up to date with MyET1.com, and how we're supporting UK workers to resolve their employment disputes.
                    </p>
                    <br />
                </div>
                <div className="right">
                    {!isSubmitted ? (
                        <form className="contact-form" onSubmit={handleFormSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    id="name"
                                    name="name"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <button type="submit">Sign up</button>
                        </form>
                    ) : (
                        <p style={{ fontSize: "20px", color: "orange", marginLeft: "150px", marginTop: "10px" }}>Thank you for signing up!<br /> We'll be in touch soon.</p>
                    )}
                </div>
            </div>
            <br />

            {/* Modal component */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h3>Is your email address correct?</h3>
                <p>{email}</p>
                <label>
                    <input
                        type="checkbox"
                        checked={isConfirmed}
                        onChange={() => setIsConfirmed(!isConfirmed)}
                    />
                    Yes, my email address is correct
                </label>
                <button onClick={handleConfirm} disabled={!isConfirmed}>
                    Confirm
                </button>
            </Modal>
        </div>
    );
};

export default NewsLetter;
