import React from 'react';
import '../styles/tailwind-utilities.css';

const colorMap = {
  emerald: 'bg-emerald-500',
  blue: 'bg-blue-500',
  accent: 'bg-accent',
  primary: 'bg-primary',
};

const ProgressBar = ({ value = 0, className = '', color = 'emerald', ...props }) => (
  <div className={`progress-bar ${className}`} {...props}>
    <div
      className={`progress-bar-inner ${colorMap[color] || colorMap['emerald']}`}
      style={{ width: `${value}%` }}
    />
  </div>
);

export default ProgressBar; 