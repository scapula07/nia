import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "@/components/groupCheckout/checkoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const PaymentPage = () => {
  const router = useRouter();
  
  const clientSecret = Array.isArray(router.query.clientSecret) 
  ? router.query.clientSecret[0] 
  : router.query.clientSecret;


  return (
    <div>
      <h1>Complete Your Payment</h1>
      {clientSecret ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      ) : (
        <p>Loading payment details...</p>
      )}
    </div>
  );
};

export default PaymentPage;
