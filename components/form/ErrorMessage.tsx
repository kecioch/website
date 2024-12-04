import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const ErrorMessage = ({ children, className }: Props) => {
  return (
    <span className={`text-red-700 text-sm ${className}`}>{children}</span>
  );
};

export default ErrorMessage;
