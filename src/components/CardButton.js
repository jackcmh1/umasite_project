// CardButton.js
import React from 'react';

function CardButton({ index, card, onClick }) {
  const buttonStyle = {
    backgroundImage: card ? `url(${card})` : '',
    backgroundSize: 'cover',
    color: card ? 'transparent' : '',
  };

  return (
    <div
      className="card-button"
      style={buttonStyle}
      data-index={index}
      onClick={onClick}
    >
      {card ? '' : '+'}
    </div>
  );
}

export default CardButton;