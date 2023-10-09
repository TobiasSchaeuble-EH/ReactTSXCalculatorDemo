import React, { FunctionComponent } from 'react';
import "./Button.scss"

interface ButtonProps {
  children?: string;
  color?: 'red' | 'green' | 'dark';
  onClick?: () => void;
}

export const Button: FunctionComponent<ButtonProps> = ({ children, color, onClick }) => {
  const buttonClass = color ? `btn-${color}` : '';

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;