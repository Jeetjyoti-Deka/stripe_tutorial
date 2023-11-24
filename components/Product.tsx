"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { useCartContext } from "@/context/CartContext";
import AddItem from "./AddItem";
import RemoveItem from "./RemoveItem";

const Product = ({
  product,
}: {
  product: { id: string; title: string; price: number };
}) => {
  const cart = useCartContext();
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <Card className="min-w-[250px]">
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>$ {product.price}</p>
      </CardContent>
      <CardFooter>
        {productQuantity > 0 ? (
          <div className="flex flex-col gap-4 w-full">
            <div className="flex w-full items-center select-none">
              <AddItem productId={product.id} />
              <p className="flex-1 flex justify-center items-center">
                In cart: {productQuantity}
              </p>
              <RemoveItem productId={product.id} />
            </div>
            <div>
              <Button
                className="w-full"
                variant="destructive"
                onClick={() => cart.deleteFromCart(product.id)}
              >
                Remove from cart
              </Button>
            </div>
          </div>
        ) : (
          <Button
            className="w-full bg-blue-400"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add to cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
export default Product;
