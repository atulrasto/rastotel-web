// src/components/ui/Button.tsx
import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline"
}

export const Button: React.FC<ButtonProps> = ({ variant = "primary", children, ...props }) => {
  const base =
    "px-4 py-2 rounded-lg text-sm font-medium focus:outline-none transition-colors"

  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
      : "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-blue-400"

  return (
    <button {...props} className={`${base} ${styles} ${props.className ?? ""}`}>
      {children}
    </button>
  )
}
