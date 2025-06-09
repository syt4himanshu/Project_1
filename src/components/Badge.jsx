import React from 'react';
import '../styles/tailwind-utilities.css';

const Badge = ({ children, className = '', ...props }) => (
  <span className={`badge ${className}`} {...props}>
    {children}
  </span>
);

export default Badge; 