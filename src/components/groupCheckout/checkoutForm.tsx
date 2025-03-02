import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);
    setMessage("");

    const cardElement = elements.getElement(CardElement);
    const { paymentIntent, error } = await stripe.confirmCardPayment(
      "{YOUR_CLIENT_SECRET_HERE}",
      { payment_method: { card: cardElement! } }
    );

    if (error) {
      setMessage(error.message || "Payment failed.");
    } else if (paymentIntent.status === "succeeded") {
      setMessage("Payment successful!");
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={isProcessing || !stripe || !elements}>
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default CheckoutForm;
