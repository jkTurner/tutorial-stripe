'use client'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import toCents from "@/util/toCents";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const Checkout = ({ amount }: { amount: number }) => {

    const [clientSecret, setClientSecret] = useState("");

    // fetch clientSecret from the api route
    useEffect(() => {
        fetch("/api/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: toCents(amount) }),
        })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, [amount]);

    // show a spinner while loading Stripe context
    if (!clientSecret) {
        return (
        <div className="flex justify-center items-center h-40 w-[600px]">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-violet-500" />
        </div>
        );
    }

    return (
        <Elements
            stripe={stripePromise}
            options={{
                clientSecret,
        }}>
            <CheckoutForm amount={amount} clientSecret={clientSecret} />
        </Elements>
    );
};

export default Checkout;
