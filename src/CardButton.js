// CardButton.js
import React from 'react';

function CardButton({ onClick, index }) {
  return (
    <div className="card-button" data-index={index} onClick={onClick}>
      +
    </div>
  );
}

export default CardButton;
