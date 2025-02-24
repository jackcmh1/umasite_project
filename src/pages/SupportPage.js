// pages/SupportPage.js
import React, { useState } from 'react';
import CardButton from '../components/CardButton'; // 카드 버튼 컴포넌트
import CardModal from '../components/CardModal'; // 카드 모달 컴포넌트
import Tab from '../components/Tab'; // 탭 컴포넌트
import ResetButton from '../components/ResetButton'; // 초기화 버튼 컴포넌트
import Cards from '../components/Cards'; // 카드 데이터

const SupportPage = () => {
  // *** 상태 정의 ***
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

  // *** 함수 정의 ***
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
    <main>
      <h2>Select Cards Below</h2>
      <div className="card-container-wrapper">
        <div className="card-container">
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
  );
};

export default SupportPage;