import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
 
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // Leave it blank and it will use your account's apiVersion default
});
 
export async function POST(request: NextRequest) {
    
    try {
        const { amount } = await request.json();
 
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            automatic_payment_methods: { enabled: true },
        });
 
        return NextResponse.json({ clientSecret: paymentIntent.client_secret });
        
    } catch (error) {
            console.error("Internal Error:", error);
            return NextResponse.json(
            { error: `Internal Server Error: ${error}` },
            { status: 500 }
        );
    }
}
 