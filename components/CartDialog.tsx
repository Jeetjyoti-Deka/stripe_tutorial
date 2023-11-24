"use client";

import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCartContext } from "@/context/CartContext";
import { getProductById } from "@/lib/data";
import { Button } from "./ui/button";
import DeleteFromCart from "./DeleteFromCart";
import { checkout } from "@/lib/actions/stripe.action";
import { useRouter } from "next/navigation";

const CartDialog = () => {
  const router = useRouter();
  const cart = useCartContext();
  const totalProductsCount = cart.cartProducts.reduce(
    (acc, cur) => acc + cur.qty,
    0
  );

  const stripeCheckout = async () => {
    const checkout_url = await checkout(cart.cartProducts);

    router.push(checkout_url!);
  };

  return (
    <Dialog>
      <DialogTrigger className="bg-white p-3 rounded-full">
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
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl">Cart</DialogTitle>
        </DialogHeader>
        {totalProductsCount > 0 ? (
          <div className="flex flex-col gap-4">
            {cart.cartProducts.map((product) => {
              const productData = getProductById(product.id);
              const productQty = cart.getProductQuantity(product.id);

              return (
                <div
                  className="flex items-center justify-between"
                  key={product.id}
                >
                  <p className="w-[50px]">{productData?.title}</p>
                  <p>$ {productData?.price}</p>
                  <p>{productQty}</p>
                  <DeleteFromCart id={product.id} />
                </div>
              );
            })}
            <Separator className="my-3 bg-gray-700" />
            <div className="flex items-center justify-between">
              <p>Total</p>
              <p>$ {cart.getTotalCost()}</p>
              <p>{totalProductsCount}</p>
            </div>
            <div className="w-full flex justify-end mt-4">
              <Button className="bg-blue-500" onClick={stripeCheckout}>
                Purchase
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <p>Cart is empty...</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
export default CartDialog;
