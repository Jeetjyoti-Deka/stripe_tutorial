"use client";

import { getProductById } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { createContext, useContext, useEffect, useState } from "react";

type CartItemType = {
  id: string;
  qty: number;
};

type CartContextType = {
  cartProducts: CartItemType[]; // [ {id: "1", qty: 2}]
  getProductQuantity: (id: string) => number;
  addOneToCart: (id: string) => void;
  removeOneFromCart: (id: string) => void;
  deleteFromCart: (id: string) => void;
  getTotalCost: () => number;
};

const CartContext = createContext<CartContextType | null>(null);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<any[]>([]);

  useEffect(() => {
    const cartItemsString = localStorage.getItem("cart");
    if (cartItemsString !== "" && cartItemsString !== null) {
      const cartItems = JSON.parse(cartItemsString);
      setCartProducts(cartItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const getProductQuantity = (id: string) => {
    const existItem: CartItemType = cartProducts.find(
      (product) => product.id === id
    );

    if (existItem) {
      return existItem.qty;
    } else {
      return 0;
    }
  };

  const addOneToCart = (id: string) => {
    const existItem = cartProducts.find((product) => product.id === id);

    if (existItem) {
      const updatedCart = cartProducts.map((product) => {
        if (product.id === existItem.id) {
          return { ...product, qty: product.qty + 1 };
        } else {
          return product;
        }
      });

      setCartProducts(updatedCart);
    } else {
      setCartProducts((prev) => [...prev, { id, qty: 1 }]);
    }
  };

  const deleteFromCart = (id: string) => {
    setCartProducts((prev) => prev.filter((item) => item.id !== id));
  };

  const removeOneFromCart = (id: string) => {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      const updatedCart = cartProducts.map((product) => {
        if (product.id === id) {
          return { ...product, qty: product.qty - 1 };
        } else {
          return product;
        }
      });
      setCartProducts(updatedCart);
    }
  };

  const getTotalCost = () => {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductById(cartItem.id);
      if (productData) {
        totalCost += productData.price * cartItem.qty;
      }
    });

    return formatPrice(totalCost);
  };

  const contextValue = {
    cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;

export function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("You must use useCartContext within CartContextProvider");
  }

  return context;
}
