// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
var stripekey =process.env.STRIPE_KEY
const stripe = require('stripe')(stripekey);

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const { products,orderId } = req.body; // Expecting an array of products

  try {
    const line_items = products.map((product: any) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: product.title,
          description: product.desc, // Optional
          images: [product.img], // Optional
        },
        unit_amount: Math.round(product.price * 100), // Convert price to cents
      },
      quantity: product.qty,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items, // Use the dynamically generated line_items array
      mode: "payment",
      success_url: `http://localhost:3000/share/${orderId}`,
      cancel_url: `http://localhost:3000/checkout`,
    });

    res.status(200).json({ session: session });
  } catch (e) {
        console.log(e)
        throw new Error(e)
    }
  
    
}
