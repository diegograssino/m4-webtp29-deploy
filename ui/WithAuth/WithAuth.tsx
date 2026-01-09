"use client";

import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const WithAuth = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { isUserLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (!isUserLoggedIn) {
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }
  }, []);

  if (!isUserLoggedIn) {
    return <h2>Debes loguearte para acceder a esta página</h2>;
  }

  return <div>{children}</div>;
};

export default WithAuth;
