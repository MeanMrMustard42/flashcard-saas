import { loadStripe } from '@stripe/stripe-js';

let stripePromise

const getStripe = async () => {
  try {
  if (!stripePromise) {
    stripePromise = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    console.log("what dis? : " + process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
    console.log("promoose: " + stripePromise)
  }
  } catch (error) {
    console.error('Error loading Stripe:', error);
  }
  return stripePromise
}

export default getStripe
