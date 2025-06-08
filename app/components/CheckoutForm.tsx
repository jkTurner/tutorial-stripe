'use client'
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
 
const CheckoutForm = ({ amount, clientSecret }: { amount: number; clientSecret: string }) => {
 
    const stripe = useStripe();
    const elements = useElements();
 
    const [errorMessage, setErrorMessage] = useState<string>();
    const [loading, setLoading] = useState(false);
 
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
 
        if (!stripe || !elements) {
            return;
        }
 
        const { error: submitError } = await elements.submit();
 
        if (submitError) {
            setErrorMessage(submitError.message);
            setLoading(false);
            return;
        }
 
        const { error } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: `http://localhost:3000/payment-success?amount=${amount}`,
            },
        });
 
        if (error) {
            setErrorMessage(error.message);
        }
 
        setLoading(false);
    };
 
    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-[600px]"
        >
            <PaymentElement />
            <button
                type="submit"
                disabled={!stripe || !elements || loading}
                className="py-2 bg-violet-400 rounded-lg w-full text-white mt-[16px] cursor-pointer disabled:opacity-50 disabled:animate-pulse"
            >
                {loading ? "Processing..." : `Pay $${amount}`}
            </button>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </form>
    );
};
 
export default CheckoutForm;