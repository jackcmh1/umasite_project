import React from 'react';

function CardModal({ isOpen, onClose, cards, activeButton, setDecks, activeTab, decks }) {
  const handleCardSelect = (card) => {
    if (activeButton) {
      const buttonIndex = activeButton.dataset.index;
      if (buttonIndex !== undefined) {
        const updatedDeck = { ...decks };
        updatedDeck[activeTab][buttonIndex] = card.image;
        setDecks(updatedDeck);
        activeButton.style.backgroundImage = `url(${card.image})`;
        activeButton.style.backgroundSize = 'cover';
        activeButton.style.color = 'transparent';
        onClose();
      } else {
        console.error('Button index is undefined');
      }
    } else {
      console.error('Active button is undefined');
    }
  };

  const handleDeselect = () => {
    if (activeButton) {
      const buttonIndex = activeButton.dataset.index;
      if (buttonIndex !== undefined) {
        const updatedDeck = { ...decks };
        updatedDeck[activeTab][buttonIndex] = null; // 이미지 제거
        setDecks(updatedDeck);
        activeButton.style.backgroundImage = ''; // 배경 이미지 제거
        activeButton.style.color = ''; // 텍스트 색상 초기화
        onClose(); // 모달 닫기
      }
    }
  };

  const renderCardList = () => {
    // 선택 해제 버튼을 리스트의 첫 번째 항목으로 추가
    const cardItems = [
      <div className="card-item" key="deselect" onClick={handleDeselect}>
        <img src="/images/image_deselect.png" alt="Deselect" className="card-image" />
        <p>선택 해제</p>
      </div>,
      ...cards.map((card) => (
        <div className="card-item" key={card.card_id} onClick={() => handleCardSelect(card)}>
          <img src={card.image} alt={card.name} className="card-image" />
          <p>{card.name}</p>
        </div>
      ))
    ];

    return cardItems;
  };

  if (!isOpen) return null;

  return (
    <div className={`modal ${isOpen ? 'visible' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h3>Select here</h3>
        <div id="card-selection-list" className="card-selection-list">
          {renderCardList()}
        </div>
      </div>
    </div>
  );
}

export default CardModal;
