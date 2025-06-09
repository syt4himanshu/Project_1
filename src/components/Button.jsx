import React from 'react';
import '../styles/tailwind-utilities.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  as: Component = 'button',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300';

  const variants = {
    primary: 'btn-primary',
    accent: 'btn-accent',
    outline: 'btn-outline',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <Component
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
