import React from 'react';

function Tab({ activeTab, onTabClick }) {
  const tabs = ['deck1', 'deck2', 'deck3', 'deck4', 'deck5', 'deck6'];

  return (
    <div id="tab-container">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`tab-button ${activeTab === tab ? 'active' : ''}`}
          onClick={() => onTabClick(tab)}
        >
          {tab.charAt(tab.length - 1)} {/* 탭 이름 표시 */}
        </button>
      ))}
    </div>
  );
}

export default Tab;
