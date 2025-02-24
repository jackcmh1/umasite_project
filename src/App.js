// App.js
import React, { useState } from 'react';
import Cards from './Cards';
import CardModal from './CardModal';
import Tab from './Tab';
import ResetButton from './ResetButton';
import CardButton from './CardButton';
import './variables.css';
import './styles.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('deck1');
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [decks, setDecks] = useState({
    deck1: Array(6).fill(null),
    deck2: Array(6).fill(null),
    deck3: Array(6).fill(null),
    deck4: Array(6).fill(null),
    deck5: Array(6).fill(null),
    deck6: Array(6).fill(null),
  });

  const openModal = (index) => {
    setSelectedCardIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCardIndex(null);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const resetSelection = () => {
    setDecks((prevDecks) => ({
      ...prevDecks,
      [activeTab]: Array(6).fill(null),
    }));
  };

  return (
    <div className="App">
      <header>
        <h1>Card Selection App</h1>
      </header>

      <main>
        <h2>Select Cards Below</h2>
        <div className="card-container-wrapper">
          <div className="card-container">
            {/* 카드 버튼 반복 생성 */}
            {decks[activeTab].map((card, index) => (
              <CardButton
                key={index}
                index={index}
                card={card}
                onClick={() => openModal(index)}
              />
            ))}
          </div>
        </div>

        {/* 탭과 초기화 버튼 */}
        <Tab activeTab={activeTab} onTabClick={handleTabClick} />
        <ResetButton onReset={resetSelection} />

        {/* 모달 컴포넌트 */}
        <CardModal
          isOpen={isModalOpen}
          onClose={closeModal}
          cards={Cards}
          activeTab={activeTab}
          decks={decks}
          setDecks={setDecks}
          selectedCardIndex={selectedCardIndex}
        />
      </main>

      <footer>
        <p>Footer Example</p>
      </footer>
    </div>
  );
}

export default App;