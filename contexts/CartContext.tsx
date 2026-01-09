"use client";
import { CartItem } from "@/types/cart";
import React, { createContext, useEffect, useState } from "react";

interface CartContextProps {
  cart: CartItem[];
  onAddToCart: (cartItem: CartItem) => void;
  isOnCart: (cartItem: CartItem) => boolean;
  totalCart: number;
  onEmptyCart: () => void;
}

export const CartContext = createContext<CartContextProps>({
  cart: [],
  onAddToCart: () => {},
  isOnCart: () => false,
  totalCart: 0,
  onEmptyCart: () => {},
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    if (cart?.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart")!);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCart(localCart);
  }, []);

  const onAddToCart = (cartItem: CartItem) => {
    if (Array.isArray(cart)) {
      setCart([...cart, cartItem]);
    } else {
      setCart([cartItem]);
    }
  };

  const isOnCart = (cartItem: CartItem) =>
    cart?.some((item) => item.id === cartItem.id);

  const totalCart = cart?.reduce((acc, item) => acc + item.price, 0);

  const onEmptyCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        onAddToCart,
        isOnCart,
        totalCart,
        onEmptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
