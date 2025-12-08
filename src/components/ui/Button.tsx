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
      "bg-ink text-white hover:bg-midnight hover:shadow-soft active:scale-95",
    secondary:
      "bg-moss text-white hover:bg-amber hover:text-ink active:scale-95",
    outline:
      "border-2 border-ink text-ink hover:bg-sky hover:border-midnight active:scale-95",
    ghost: "text-ink hover:bg-stone/30 active:scale-95"
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
