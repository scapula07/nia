import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { products, orderId } = req.body;
            const orderID = orderId as string;

            // Calculate total amount
            const amount = products.reduce((total: number, product: { price: number; qty: number }) => {
                return total + product.price * product.qty;
            }, 0);

            if (amount <= 0) {
                return res.status(400).json({ error: 'Invalid amount' });
            }


            // Create a PaymentIntent with manual capture (HOLD)
            const paymentIntent = await stripe.paymentIntents.create({
                payment_method_types: ['card'],
                amount: Math.round(amount * 100), // Convert to cents
                currency: 'usd',
                capture_method: 'manual', // HOLD funds but don't capture immediately
                metadata: {
                    orderId: orderID,
                },
            });

            res.status(200).json({
                clientSecret: paymentIntent.client_secret,
                status: paymentIntent.status,
                captureMethod: paymentIntent.capture_method,
                isHeld: paymentIntent.capture_method === 'manual' && paymentIntent.status === 'requires_capture'
            });
        } catch (err: any) {
            res.status(err.statusCode || 500).json({ error: err.message });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
