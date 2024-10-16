import React from 'react';
import '..//InputC/inputc.css'; // Assuming you have a CSS file for Input component

const Input = ({ placeholder, value, onChange }) => {
  return (
    <input
      className="input-field"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
