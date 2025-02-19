import 'server-only'

import Stripe from 'stripe'

if (!process.env.STRIPE_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not defined in environment variables');
}
export const stripe = new Stripe(process.env.STRIPE_KEY!)