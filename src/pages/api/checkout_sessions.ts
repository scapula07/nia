import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { products, orderId  } = req.body;
            const orderID =orderId as string
            console.log(orderID)

            const line_items = products.map((product: {
                image: any; productName: any; price: number; qty: any;
            }) => ({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: product.productName,
                        images: [product.image],
                    },
                    unit_amount: Math.round(product.price * 100), 
                },
                quantity: product.qty,
            }));


            // Create Checkout Session
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: `${req.headers.origin}/share?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/cart`,
                metadata: {
                    orderId,
                },
            });
            res.status(200).json({ url: session.url });
        } catch (err: any) {
            res.status(err.statusCode || 500).json({ error: err.message });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
