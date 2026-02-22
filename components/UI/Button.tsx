import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  to?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  to,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 border border-transparent rounded px-8 py-3",
    secondary: "bg-transparent text-white border border-white hover:bg-white hover:text-black rounded px-8 py-3",
    text: "bg-transparent text-white underline hover:text-gray-300 p-0"
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const classes = `${baseStyles} ${variants[variant]} ${widthStyle} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
