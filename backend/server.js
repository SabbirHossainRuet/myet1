const express = require("express");
const app = express();
const stripe = require("stripe")("sk_test_51PnCOZRxea1sBKLj6RphRVfcrS4zbSdVwCHDhjcQVT0eziRpTzgRJElz6gdabgQ9yDeaK94pv5cLhM3VEhASTTzs00uxWrHslg"); // Use your actual Stripe secret key
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());

// Route to handle payment intent creation
app.post("/create-payment-intent", async (req, res) => {
    const { amount } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "gbp",
        });

        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
