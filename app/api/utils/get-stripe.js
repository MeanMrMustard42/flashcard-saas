
'use client'

import { Stripe, loadStripe } from '@stripe/stripe-js';
import {useEffect} from 'react'

let stripePromise


const getStripe = async () => {
  try {
  if (!stripePromise) {
    useEffect(() => {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    console.log("windooow : " + typeof window)
    console.log("awaited promoose: " + stripePromise)
  });
  }
  } catch (error) {
    console.error('Error loading Stripe:', error);
  }

  return stripePromise
}

export default getStripe
