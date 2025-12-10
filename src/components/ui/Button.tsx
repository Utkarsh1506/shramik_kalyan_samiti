"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-medium rounded-lg transition-all duration-200 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-r from-ink to-midnight text-white hover:from-midnight hover:to-ink hover:shadow-lg shadow-md active:scale-95",
    secondary:
      "bg-gradient-to-r from-moss to-amber text-white hover:from-amber hover:to-moss hover:shadow-lg shadow-md active:scale-95",
    outline:
      "border-2 border-ink text-ink hover:bg-gradient-to-r hover:from-sky hover:to-sky/50 hover:border-moss hover:shadow-lg active:scale-95",
    ghost: "text-ink hover:bg-gradient-to-r hover:from-stone/10 hover:to-stone/20 active:scale-95"
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
