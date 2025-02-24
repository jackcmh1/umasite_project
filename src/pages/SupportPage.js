// pages/SupportPage.js
import React, { useState, useEffect } from 'react';
import CardButton from '../components/CardButton'; // 카드 버튼 컴포넌트
import CardModal from '../components/CardModal'; // 카드 모달 컴포넌트
import Tab from '../components/Tab'; // 탭 컴포넌트
import ResetButton from '../components/ResetButton'; // 초기화 버튼 컴포넌트
import Cards from '../components/Cards'; // 카드 데이터

const SupportPage = () => {
  // *** 상태 정의 ***
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [activeTab, setActiveTab] = useState('deck1');   // 현재 탭 상태
  const [selectedCardIndex, setSelectedCardIndex] = useState(null); // 선택된 카드 슬롯

  // 덱 상태를 LocalStorage에서 불러오거나, 초기값으로 설정
  const [decks, setDecks] = useState(() => {
    const savedDecks = localStorage.getItem('decks'); // LocalStorage에서 저장된 덱 조회
    // 저장된 덱이 있다면 JSON으로 파싱하여 사용, 없다면 초기 상태로 설정
    return savedDecks
      ? JSON.parse(savedDecks)
      : {
          deck1: Array(6).fill(null),
          deck2: Array(6).fill(null),
          deck3: Array(6).fill(null),
          deck4: Array(6).fill(null),
          deck5: Array(6).fill(null),
          deck6: Array(6).fill(null),
        };
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

  // *** LocalStorage에 덱 정보 저장 ***
  useEffect(() => {
    localStorage.setItem('decks', JSON.stringify(decks)); // 덱 정보 저장
  }, [decks]); // decks 상태가 변경될 때마다 실행

  // *** 페이지 진입 시 초기화 작업 ***
  useEffect(() => {
    // 컴포넌트가 처음 마운트될 때 activeTab과 모달 상태 초기화
    setActiveTab('deck1');    // 항상 첫 번째 탭으로 초기화
    setIsModalOpen(false);    // 모달은 항상 닫힌 상태로
  }, []);

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