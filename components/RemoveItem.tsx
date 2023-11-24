"use client";

import { useCartContext } from "@/context/CartContext";

const RemoveItem = ({ productId }: { productId: string }) => {
  const cart = useCartContext();
  return (
    <div
      className="cursor-pointer"
      onClick={() => cart.removeOneFromCart(productId)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
};
export default RemoveItem;
