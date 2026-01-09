"use client";

import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

const DashboardComponet = () => {
  const { orders, user, isOrders } = useContext(AuthContext);

  return (
    <div>
      <p>{user?.user.email}</p>
      <p>{user?.user.name}</p>
      <p>{user?.user.address}</p>
      <p>{user?.user.phone}</p>
      <p>Cantidad de ordenes: {orders.length}</p>
      {isOrders ? (
        <div className="flex flex-col gap-1">
          {orders.map((order, i) => (
            <p key={i}>{order.id}</p>
          ))}
        </div>
      ) : (
        <p>No hay ordenes</p>
      )}
    </div>
  );
};

export default DashboardComponet;
