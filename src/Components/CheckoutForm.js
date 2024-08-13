// src/CheckoutForm.js

import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./CheckoutForm.css"; // Import the CSS file

const CheckoutForm = ({ clientSecret, amount, onPaymentSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        setProcessing(true);

        const { error: stripeError, paymentIntent } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            });

        setProcessing(false);

        if (stripeError) {
            setError(stripeError.message);
        } else if (paymentIntent.status === "succeeded") {
            onPaymentSuccess();
        }
    };

    return (
        <div>
            <div className="checkout-form-container">
                <h2 className="checkout-form-title">Complete Your Purchase</h2>
                <form onSubmit={handleSubmit} className="checkout-form">
                    <div className="form-group">
                        <label htmlFor="cardNumber">Card Number</label>
                        <CardElement
                            id="cardNumber"
                            options={{
                                hidePostalCode: true,
                                style: {
                                    base: {
                                        fontSize: "16px",
                                        color: "#333",
                                        "::placeholder": {
                                            color: "#aaa",
                                        },
                                    },
                                },
                            }}
                            className="card-element"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="zip">ZIP Code</label>
                        <input
                            type="text"
                            id="zip"
                            placeholder="ZIP Code"
                            className="form-input"
                            maxLength="10"
                        />
                    </div>
                    <button
                        type="submit"
                        className="submit-button"
                        disabled={processing || !stripe}
                    >
                        {processing ? "Processing..." : `Pay £${(amount / 100).toFixed(2)}`}
                    </button>
                    {error && <div className="error-message">{error}</div>}
                </form>
            </div>
            <br />
        </div>
    );
};

export default CheckoutForm;
