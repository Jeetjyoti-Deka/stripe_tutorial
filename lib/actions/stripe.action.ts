"use server";

import { redirect } from "next/navigation";
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
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    return session.url as string;
  } catch (error) {
    console.log("In the checkout route", error);
  }
}
