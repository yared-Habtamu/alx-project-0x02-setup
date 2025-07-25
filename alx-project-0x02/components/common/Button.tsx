import React from "react";
import { type ButtonProps } from "../../interfaces";
//import Button from", "@/components/common/Button", "Button"
const sizeClasses = {
  small: "py-1 px-3 text-sm",
  medium: "py-2 px-4 text-base",
  large: "py-3 px-6 text-lg",
};

const shapeClasses = {
  "rounded-sm": "rounded-sm",
  "rounded-md": "rounded-md",
  "rounded-full": "rounded-full",
};

const Button: React.FC<ButtonProps> = ({
  size,
  shape,
  children,
  onClick,
  type = "button",
}) => {
  const className = `${sizeClasses[size]} ${shapeClasses[shape]} bg-blue-600 text-white font-semibold`;
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
