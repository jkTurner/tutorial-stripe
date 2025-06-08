# Stripe Payment Setup (Next.js 15)

This project demonstrates how to integrate **Stripe Payments** in a **Next.js 15** app using **Stripe Elements** and the **Payment Intents API**. It includes a secure checkout flow with client/server separation and a confirmation screen, making it perfect for selling digital or physical products in your modern React app.

## What This Project Covers

- Setting up Stripe keys in `.env.local`
- Installing and understanding the required Stripe libraries
- Creating a secure API route for `paymentIntent`
- Building a complete checkout flow using:
  - `loadStripe()`
  - `<Elements>`
  - `useStripe()` and `useElements()`
  - `<PaymentElement>`
- Using a utility function to convert dollars to cents
- Creating a custom confirmation page (`/payment-success`)

## Read the Full Tutorial

This project is part of the **Dev Steps Tutorials** series by Jakkrit Turner.  
Follow the complete tutorial here:

**[Stripe Setup Tutorial on jkturner.site](http://jkturner.site/tutorials/react-ecosystem/stripe-setup)**

## Tech Stack

- Next.js 15.3.3 (App Router)
- Stripe API + Stripe Elements
- `@stripe/react-stripe-js` 3.7.0
- `@stripe/stripe-js` 7.3.1
- Tailwind CSS 4
