import './App.css';
import React, { useEffect, useState } from "react";
import { select } from './select';
import axios from 'axios';

function App() {
  const [mn_title, setMnTitle] = useState('');
  const [mn_textarea, setMnTextarea] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'mn_title') {
      setMnTitle(value);
    } else if (name === 'mn_textarea') {
      setMnTextarea(value);
    }
  };

  const createMeeting = async () => {
    if (mn_title.length < 2) {
      alert('모임명은 2글자 이상 입력해야합니다.');
    } else if (mn_textarea.length < 10) {
      alert('모임내용은 10글자 이상 입력해야합니다.');
    } else {
      // 이미지 업로드 없이 텍스트 데이터만 서버로 전송
      const data = {
        id: 0 ,
        mn_title: mn_title,
        area1: document.getElementById('sido1').value,
        area2: document.getElementById('gugun1').value,
        mn_textarea: mn_textarea,
        img1 : 0,
        img2 : 0,
      };

      try {
        await axios.post("/api/makeMeeting", data);
        alert('모임 만들기 성공!');
      } catch (error) {
        console.error('모임 만들기 실패:', error);
        alert('모임 만들기 실패...');
      }
    }
  };

  useEffect(() => {
    select();
  }, []);

 

  return (
    <div>
      <div className='meeting'>
        <div className="meeting-table">
        <h2 className='mn_table_title'>모임 만들기</h2>
          <div>
            <div className='meeting-title'>모임명</div>
              <input 
                className='mn_title' 
                type='text' 
                name='mn_title' 
                value={mn_title}
                onChange={handleInputChange}>
              </input>
          </div>
          <div className='meeting-area'>모임 지역</div>
          <div>            
            <select className='selectbox'  name="sido1" id='sido1'></select>
            <select className='selectbox2'  name="gugun1" id='gugun1'></select>
          </div>
          <div>
            <div className='meeting-content'>모임 내용 
              <div>
                <textarea
                  className='mn_textarea' 
                  name='mn_textarea' 
                  value={mn_textarea}
                  onChange={handleInputChange}>
                </textarea>
              </div>
            </div>
          </div>
          <div className='mn_img'>이미지</div>
          <div></div>
          <div></div>
            


          <div className='mn_btn'>
            <button className='mn_btn1' onClick={createMeeting} >만들기</button>
            <button className='mn_btn1'>뒤로가기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
