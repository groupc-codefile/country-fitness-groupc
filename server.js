console.log('Server file is starting...');
const express = require('express');
const stripe = require('stripe')('sk_test_51RBLulPKjvKIXR1AxgHsb7mlt8ks4QU3p93kUCNpRsWoTARuQ2KNWcmjKzhO7bPi6uNedgk2szEx24YQowEwjP8t00kV195P5K'); // Your Stripe Secret Key
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


app.post('/create-checkout-session', async (req, res) => {
    const { priceId } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: 'subscription', 
            success_url: 'http://localhost:5500/success.html', 
            cancel_url: 'http://localhost:5500/cancel.html',  
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});


app.listen(4242, () => console.log('Server running on port 4242'));
