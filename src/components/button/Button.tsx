import type { ReactNode } from "react";
import "./Button.css";

type ButtonProps = {
  colorClass: string;
  children?: ReactNode;
  onClick?: () => void;
};

export default function Button({
  colorClass,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`btn w-100 ${colorClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}