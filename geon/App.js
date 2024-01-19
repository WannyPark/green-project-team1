// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <NavLink to="/" end className="active">
          홈
        </NavLink>
        <NavLink to="/board" className="active">
          게시판
        </NavLink>
      </nav>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="logo">
      <img src="logo.png" alt="로고" />
    </div>
  );
};

const Content = () => {
  return (
    <div className="content">
      <div className="content-left">
        <Routes>
          <Route path="/board" element={<HomeContent />} />
        </Routes>
      </div>
      <div className="content-right">
        <Routes>
          <Route path="/board" element={<Board />} />
        </Routes>
      </div>
    </div>
  );
};

const HomeContent = () => {
  return (
    <div className="board">
      <div className="board-item">
        <h3>게시물 1</h3>
        <p>내용 1</p>
      </div>
      <div className="board-item">
        <h3>게시물 2</h3>
        <p>내용 2</p>
      </div>
    </div>
  );
};

const Board = () => {
  const generateBoardContent = () => {
    const boardData = [
      { id: 1, title: '게시물 1', content: '내용 1' },
      { id: 2, title: '게시물 2', content: '내용 2' },
    ];

    return boardData.map(item => (
      <ClickableBoardItem key={item.id} title={item.title} content={item.content} />
    ));
  };

  return <div className="board">{generateBoardContent()}</div>;
};

const ClickableBoardItem = ({ title, content }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`board-item ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Logo />
        <Content />
      </div>
    </Router>
  );
};

export default App;






