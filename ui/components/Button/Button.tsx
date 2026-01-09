"use client";
import { ButtonProps } from "@/types/ui";
import Link from "next/link";

const Button = ({
  children,
  onClick = () => {},
  variant = "primary",
  isLink = false,
  href = "/",
  ...otherProps
}: ButtonProps) => {
  if (isLink) {
    return (
      <Link className="hover:underline" href={href}>
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`bg-${variant} rounded-md p-2 cursor-pointer`}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
