import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CartContextProvider from "@/context/CartContext";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple Stripe Payments Site",
  description: "Created by Jeetjyoti Deka",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CartContextProvider>
        <body className={cn("w-full overflow-x-hidden", inter.className)}>
          <Navbar />
          {children}
        </body>
      </CartContextProvider>
    </html>
  );
}
