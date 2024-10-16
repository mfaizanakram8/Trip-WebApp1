import React from 'react';
import './Tag.css'; // Assuming you have a CSS file for Tag component

const Tag = ({ text, onRemove }) => {
  return (
    <div className="tag">
      <span className="tag-text">{text}</span>
      <button className="remove-tag-button" onClick={onRemove}>×</button>
    </div>
  );
};

export default Tag;
