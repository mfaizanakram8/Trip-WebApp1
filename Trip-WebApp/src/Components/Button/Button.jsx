import React from 'react';
import '../Button/Button.module.css'; // Assuming you have a CSS file for Button component

const Button = ({ text, onClick, className = '' }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
