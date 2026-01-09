"use client";
import { AuthContext } from "@/contexts/AuthContext";
import { CartContext } from "@/contexts/CartContext";
import { postOrder } from "@/services/orders";
import { LoginUserResponse } from "@/types/auth";
import Button from "@/ui/components/Button/Button";
import { useContext } from "react";
import { toast } from "react-toastify";

const CartComponent = () => {
  const { cart, totalCart, onEmptyCart } = useContext(CartContext);
  const { user, setOrders, orders } = useContext(AuthContext);

  const handleBuy = async () => {
    await postOrder(cart, user as LoginUserResponse).then((res) => {
      if (res.status === "approved") {
        toast.success("Pedido realizado correctamente");
        setOrders([
          ...orders,
          { id: res.id, status: res.status, date: res.date },
        ]);
        onEmptyCart();
      } else {
        toast.error("Error al realizar el pedido");
      }
    });
  };

  if (cart?.length === 0) return <h2>No hay items en el carrito</h2>;
  return (
    <div>
      <p>Total: {totalCart}</p>
      {cart.map((item) => (
        <div key={item.id} className="flex gap-2">
          <span>{item.name}</span>
          <span>{item.price}</span>
        </div>
      ))}
      <Button variant="secondary" onClick={handleBuy}>
        Comprar
      </Button>
    </div>
  );
};

export default CartComponent;
