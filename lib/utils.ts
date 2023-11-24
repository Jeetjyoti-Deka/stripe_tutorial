import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Stripe, loadStripe } from "@stripe/stripe-js";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
  return Number(((price / 100) * 100).toFixed(2));
}

let stripePromise: Promise<Stripe | null>;
export function getStripe() {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
}
