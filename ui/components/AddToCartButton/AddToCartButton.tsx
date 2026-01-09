"use client";
import { AuthContext } from "@/contexts/AuthContext";
import { CartContext } from "@/contexts/CartContext";
import { AddToCartButtonProps } from "@/types/ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-toastify";
import Button from "../Button/Button";

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const router = useRouter();
  const { isUserLoggedIn } = useContext(AuthContext);
  const { onAddToCart, isOnCart } = useContext(CartContext);
  const cartItem = { id: product.id, name: product.name, price: product.price };

  const handleAddToCart = () => {
    if (isOnCart(cartItem)) {
      router.push("/cart");
    } else {
      onAddToCart(cartItem);
      toast.success("Product added to cart");
    }
  };

  if (!isUserLoggedIn) return <Link href="/login">Login to add to cart</Link>;

  return (
    <Button variant="secondary" onClick={handleAddToCart}>
      {isOnCart(cartItem) ? "Go to cart" : "Add to cart"}
    </Button>
  );
};

export default AddToCartButton;
