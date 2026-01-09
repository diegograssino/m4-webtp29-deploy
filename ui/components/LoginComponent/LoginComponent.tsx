"use client";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import Button from "../Button/Button";

const LoginComponent = () => {
  const { isUserLoggedIn, user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  if (isUserLoggedIn)
    return (
      <div className="flex gap-2 items-center">
        <Button isLink href="/dashboard">
          {user?.user.email}
        </Button>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    );

  return (
    <Button isLink href="/login">
      Login
    </Button>
  );
};

export default LoginComponent;
