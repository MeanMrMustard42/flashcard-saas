
import React from 'react'
import { Container, Box, Typography, AppBar, Toolbar, Button, UserButton, Grid} from '@mui/material'
import { SignedIn, SignedOut } from '@clerk/nextjs'
//import { useEffect} from 'react'
import getStripe from './api/utils/get-stripe'

const stripe = await getStripe()

 const handleSubmit = async () => {
  const checkoutSession = await fetch('http://localhost:3000/api/checkout_sessions', {
    method: 'POST',
    headers: { origin: 'http://localhost:3000' },
  })

  const checkoutSessionJson = await checkoutSession.json()
  console.log("stripe is " + stripe)
  
  //useEffect(() => {
  const {error} = stripe.redirectToCheckout({
    sessionId: checkoutSessionJson.id,
  })

  if (error) {
    console.warn(error.message)
  }
  //});
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Button color="inherit" href="/sign-in">Login</Button>
            <Button color="inherit" href="/sign-up">Sign Up</Button>
          </SignedOut>
        </Toolbar>
      </AppBar>
      {/* Rest of your component */}
    </div>
  );
}


export default handleSubmit;