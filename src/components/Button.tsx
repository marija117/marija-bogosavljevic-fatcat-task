import clsx from 'clsx';
import React, { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      className={clsx(
        'rounded-lg',
        'px-4',
        'py-2',
        'bg-black',
        'text-white',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
