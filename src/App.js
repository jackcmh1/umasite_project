// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Home 페이지
import SupportPage from './pages/SupportPage'; // Support 페이지
import './variables.css';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* 상단 메뉴 */}
        <header>
          <h1>Card Selection App</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/support">Support</Link></li>
            </ul>
          </nav>
        </header>

        {/* 경로별 페이지 지정 */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;