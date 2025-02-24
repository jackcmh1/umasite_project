// CardModal.js
import React, { useState, useEffect } from 'react';

function CardModal({ isOpen, onClose, cards, activeTab, decks, setDecks, selectedCardIndex }) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (isOpen) setSearchTerm('');
  }, [isOpen]);

  const handleSearchChange = (event) => setSearchTerm(event.target.value);

  const handleCardSelect = (selectedCard) => {
    if (selectedCardIndex !== null) {
      setDecks((prevDecks) => {
        const updatedDeck = { ...prevDecks };
        updatedDeck[activeTab][selectedCardIndex] = selectedCard.image;
        return updatedDeck;
      });
      onClose();
    }
  };

  const handleDeselect = () => {
    if (selectedCardIndex !== null) {
      setDecks((prevDecks) => {
        const updatedDeck = { ...prevDecks };
        updatedDeck[activeTab][selectedCardIndex] = null;
        return updatedDeck;
      });
      onClose();
    }
  };

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className={`modal ${isOpen ? 'visible' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h3>Select Your Card</h3>

        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />

        <div className="card-selection-list">
          <div className="card-item" onClick={handleDeselect}>
            <img src="/images/image_deselect.png" alt="Deselect" className="card-image" />
            <p>Remove Selection</p>
          </div>
          {filteredCards.map((card) => (
            <div
              className="card-item"
              key={card.card_id}
              onClick={() => handleCardSelect(card)}
            >
              <img src={card.image} alt={card.name} className="card-image" />
              <p>{card.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardModal;