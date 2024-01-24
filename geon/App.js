// src/App.js
import React, { useState, useEffect } from 'react';
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
          <Route path="/board" element={<RightContent />} />
        </Routes>
      </div>
    </div>
  );
};

const HomeContent = () => {
  const [isWriteMode, setIsWriteMode] = useState(false);
  const [nickname, setNickname] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 서버에서 게시물 데이터를 가져오는 로직
        const response = await fetch('서버의_API_엔드포인트');
        const data = await response.json();
        setPosts(data); // 서버에서 받아온 데이터로 설정
      } catch (error) {
        console.error('게시물 데이터를 가져오는데 실패했습니다:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleWriteButtonClick = () => {
    setIsWriteMode(!isWriteMode);
  };

  const handleWriteSubmit = async () => {
    try {
      // 서버에 글쓰기 데이터를 전송하는 로직
      const response = await fetch('서버의_API_엔드포인트', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nickname,
          title,
          content,
          // 다른 필요한 데이터도 추가해주세요.
        }),
      });

      if (!response.ok) {
        throw new Error('글쓰기에 실패했습니다.');
      }

      // 서버에서 반환한 데이터를 받아올 수 있다면 받아와서 UI 업데이트
      // const responseData = await response.json();

      setIsWriteMode(false);
      // UI 업데이트 등 필요한 작업 수행
    } catch (error) {
      console.error('글쓰기에 실패했습니다:', error.message);
    }
  };

  return (
    <div className="board">
      {posts.length === 0 ? (
        <p>게시물이 없습니다.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="board-item">
            <h3>{post.title}</h3>
          </div>
        ))
      )}

      <button className="write-button" onClick={handleWriteButtonClick}>
        글쓰기
      </button>

      {isWriteMode && (
        <div className="write-form">
          <input type="text" placeholder="닉네임" value={nickname} onChange={(e) => setNickname(e.target.value)} />
          <input type="text" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea placeholder="내용" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
          {image && (
            <div className="image-preview">
              <img src={URL.createObjectURL(image)} alt="미리보기" />
            </div>
          )}
          <button onClick={() => handleWriteSubmit()}>작성 완료</button>
        </div>
      )}
    </div>
  );
};

const RightContent = () => {
  const [isWriteMode, setIsWriteMode] = useState(false);
  const [nickname, setNickname] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [rightPosts, setRightPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 서버에서 게시물 데이터를 가져오는 로직
        const response = await fetch('서버의_API_엔드포인트');
        const data = await response.json();
        setRightPosts(data); // 서버에서 받아온 데이터로 설정
      } catch (error) {
        console.error('게시물 데이터를 가져오는데 실패했습니다:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleWriteButtonClick = () => {
    setIsWriteMode(!isWriteMode);
  };

  const handleWriteSubmit = async () => {
    try {
      // 서버에 글쓰기 데이터를 전송하는 로직
      const response = await fetch('서버의_API_엔드포인트', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nickname,
          title,
          content,
          // 다른 필요한 데이터도 추가해주세요.
        }),
      });

      if (!response.ok) {
        throw new Error('글쓰기에 실패했습니다.');
      }

      // 서버에서 반환한 데이터를 받아올 수 있다면 받아와서 UI 업데이트
      // const responseData = await response.json();

      setIsWriteMode(false);
      // UI 업데이트 등 필요한 작업 수행
    } catch (error) {
      console.error('글쓰기에 실패했습니다:', error.message);
    }
  };

  return (
    <div className="board">
      {rightPosts.length === 0 ? (
        <p>게시물이 없습니다.</p>
      ) : (
        rightPosts.map((post) => (
          <div key={post.id} className="board-item">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))
      )}

      <button className="write-button" onClick={handleWriteButtonClick}>
        글쓰기
      </button>

      {isWriteMode && (
        <div className="write-form">
          <input type="text" placeholder="닉네임" value={nickname} onChange={(e) => setNickname(e.target.value)} />
          <input type="text" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea placeholder="내용" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
          {image && (
            <div className="image-preview">
              <img src={URL.createObjectURL(image)} alt="미리보기" />
            </div>
          )}
          <button onClick={() => handleWriteSubmit()}>작성 완료</button>
        </div>
      )}
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

















