import React from 'react';
import '../styles/tailwind-utilities.css';

const Card = ({ children, className = '', ...props }) => (
  <div className={`card ${className}`} {...props}>
    {children}
  </div>
);

export default Card; 