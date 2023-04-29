import React from "react";

type ButtonProps = {
  label: string;
  primary?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  primary = false,
  size = "small",
  onClick,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";
  const primaryClasses =
    "text-white bg-indigo-600 hover:bg-indigo-700 border-transparent focus:ring-indigo-500";
  const sizeClasses = {
    small: "px-3 py-2",
    medium: "px-4 py-2",
    large: "px-6 py-3",
  };
  const classes = `${baseClasses} ${primaryClasses} ${sizeClasses[size]}`;

  return (
    <button type="button" className={classes} onClick={onClick}>
      {label}
    </button>
  );
};

Button.displayName = "Button";
