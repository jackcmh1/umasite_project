import React, { useState } from 'react';
import Cards from './Cards';
import CardModal from './CardModal';
import Tab from './Tab';
import ResetButton from './ResetButton';
import CardButton from './CardButton'; // CardButton 컴포넌트 임포트
import './variables.css';
import './styles.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('deck1');
  const [activeButton, setActiveButton] = useState(null);
  const [decks, setDecks] = useState({
    deck1: Array(6).fill(null),
    deck2: Array(6).fill(null),
    deck3: Array(6).fill(null),
    deck4: Array(6).fill(null),
    deck5: Array(6).fill(null),
    deck6: Array(6).fill(null),
  });

  const openModal = (event) => {
    const button = event.currentTarget; // 클릭된 버튼 참조
    setActiveButton(button);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveButton(null); // activeButton 초기화
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    loadDeck(tab);
  };

  const loadDeck = (deckName) => {
    const updatedDeck = { ...decks };
    const cardButtons = document.querySelectorAll('.card-button');

    cardButtons.forEach((button, index) => {
      const cardImage = updatedDeck[deckName][index];
      if (cardImage) {
        button.style.backgroundImage = `url(${cardImage})`;
        button.style.backgroundSize = 'cover';
        button.style.color = 'transparent';
      } else {
        button.style.backgroundImage = '';
        button.style.color = '';
      }
    });
  };

  const resetSelection = () => {
    const updatedDecks = {
      ...decks,
      [activeTab]: Array(6).fill(null), // 현재 활성 탭의 카드를 빈 상태로 초기화
    };
    setDecks(updatedDecks);

    const cardButtons = document.querySelectorAll('.card-button');
    cardButtons.forEach(button => {
      button.style.backgroundImage = '';
      button.style.color = '';
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Example Header</h1>
      </header>

      <main>
        <h2>Select below</h2>
        <div className="card-container-wrapper">
          <div className="card-container">
            <div className="row">
              <CardButton index={0} onClick={(event) => openModal(event)} />
              <CardButton index={1} onClick={(event) => openModal(event)} />
              <CardButton index={2} onClick={(event) => openModal(event)} />
            </div>
            <div className="row">
              <CardButton index={3} onClick={(event) => openModal(event)} />
              <CardButton index={4} onClick={(event) => openModal(event)} />
              <CardButton index={5} onClick={(event) => openModal(event)} />
            </div>
          </div>
        </div>

        <Tab activeTab={activeTab} onTabClick={handleTabClick} />
        <ResetButton onReset={resetSelection} />

        <CardModal
          isOpen={isModalOpen}
          onClose={closeModal}
          cards={Cards}
          activeButton={activeButton}
          setDecks={setDecks}
          activeTab={activeTab}
          decks={decks}
        />
      </main>

      <footer>
        <p>footer example</p>
      </footer>
    </div>
  );
}

export default App;
