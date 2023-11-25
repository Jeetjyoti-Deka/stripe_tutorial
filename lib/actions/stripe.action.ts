"use server";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET as string);

export async function checkout(data: { id: string; qty: number }[]) {
  try {
    console.log(data);

    const cartItems = data;

    let lineItems: { price: string; quantity: number }[] = [];

    cartItems.forEach((item: { id: string; qty: number }) => {
      lineItems.push({
        price: item.id,
        quantity: item.qty,
      });
    });

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.DOMAIN}/success`,
      cancel_url: `${process.env.DOMAIN}/cancel`,
    });

    return session.url as string;
  } catch (error) {
    console.log("In the checkout route", error);
  }
}
