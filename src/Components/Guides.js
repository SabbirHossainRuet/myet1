// import React from "react";

// const Guides = () => {
//     return (
//         <div>
//             <p className="primary-subheading">ET1 Guides</p>
//             <div className="card-container">
//                 <div className="card">
//                     <h3>Free Guide</h3>
//                     <button>Download</button>
//                     <p className="g">Example Text</p>
//                 </div>
//                 <div className="card">
//                     <h3>Guide 2</h3>
//                     <h4>£14.99</h4>
//                     <button>Download</button>
//                     <p className="g">Example Text</p>
//                 </div>
//                 <div className="card">
//                     <h3>Guide 3</h3>
//                     <h4>£19.99</h4>
//                     <br />
//                     <button>Download</button>
//                     <p className="g">Example Text</p>
//                 </div>
//                 <div className="card">
//                     <h3>Questions and Answers</h3>
//                     <h4>£29.99</h4>
//                     <button>Download</button>
//                     <p className="g">Example Text</p>
//                 </div>
//             </div>
//             <br />
//             <div className="bundle-card">
//                 <h3>Buy Bundle 2-4</h3>
//                 <h4>£49.99</h4>
//                 <p>(Saving £15.00)</p>
//                 <button>Download</button>
//                 <p>Example Text</p>
//             </div>
//             <hr className="divider" />
//         </div>

//     );
// };

// export default Guides;

// src/Guides.js

import React, { useState } from 'react';
import CheckoutForm from './CheckoutForm';
import Modal from './Modal';

const Guides = () => {
    const [selectedGuide, setSelectedGuide] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const guides = [
        { id: 1, name: "Free Guide", price: 0, text: "Example Text" },
        { id: 2, name: "Guide 2", price: 1499, text: "Example Text" },
        { id: 3, name: "Guide 3", price: 1999, text: "Example Text" },
        { id: 4, name: "Questions and Answers", price: 2999, text: "Example Text" },
    ];

    const bundleguides = [
        {
            id: 1,
            name: "Buy Bundle 2-4",
            price: 4999,
            text1: "(Saving £15.00)",
            text2: "Example Text",
        },
    ];

    const handlePurchase = async (guide) => {
        setSelectedGuide(guide);
        setIsModalOpen(true);

        // Call your backend to create a payment intent
        const response = await fetch("http://localhost:3001/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: guide.price }),
        });

        const { clientSecret } = await response.json();
        setClientSecret(clientSecret);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setClientSecret(""); // Clear clientSecret when closing
    };

    return (
        <div>
            <p className="primary-subheading">ET1 Guides</p>
            <div className="card-container">
                {guides.map((guide) => (
                    <div className="card" key={guide.id}>
                        <h3>{guide.name}</h3>
                        {guide.price > 0 && <h4>£{(guide.price / 100).toFixed(2)}</h4>}
                        <button onClick={() => handlePurchase(guide)}>
                            {guide.price > 0 ? "Buy" : "Download"}
                        </button>
                        <p className="g">{guide.text}</p>
                    </div>
                ))}
            </div>
            <div className="bundle-card">
                {bundleguides.map((guide) => (
                    <div key={guide.id}>
                        <h3>{guide.name}</h3>
                        {guide.price > 0 && <h4>£{(guide.price / 100).toFixed(2)}</h4>}
                        <p className="g">{guide.text1}</p>
                        <button onClick={() => handlePurchase(guide)}>
                            {guide.price > 0 ? "Buy" : "Download"}
                        </button>
                        <p className="g">{guide.text2}</p>
                    </div>
                ))}
            </div>
            <br />
           
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                {selectedGuide && clientSecret && (
                    <CheckoutForm
                        clientSecret={clientSecret}
                        amount={selectedGuide.price}
                        onPaymentSuccess={() => {
                            alert("Payment Successful!");
                            handleCloseModal(); // Close modal on success
                        }}
                    />
                )}
            </Modal>
            
        </div>
    );
};

export default Guides;

