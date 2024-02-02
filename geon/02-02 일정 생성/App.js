import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    GAT_PLAN_DATE: '',
    GAT_PLAN_ADDR: '',
    GAT_PLAN_ADDR_DETAIL: '', // 상세 주소 추가
    GAT_PLAN_TITLE: '',
    GAT_PLAN_DESC: '',
    GATHERING_GAT_ID: '',
  });

  // 서버로부터 일정을 주도하는 사람의 ID를 받아오는 함수
  const fetchGatheringLeaderId = async () => {
    try {
      // 서버에서 일정을 주도하는 사람의 ID를 받아옴
      const response = await axios.get('/api/gathering/leaderId');
      // 받아온 ID를 폼 데이터에 설정
      setFormData({
        ...formData,
        GATHERING_GAT_ID: response.data.gatheringLeaderId,
      });
    } catch (error) {
      console.error('모임을 주도하는 사람의 ID를 불러오는데 실패했습니다:', error);
    }
  };

  // 페이지가 처음 렌더링될 때 한 번 실행
  useEffect(() => {
    fetchGatheringLeaderId();
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleWriteSubmit = async (e) => {
    e.preventDefault(); // 기본 이벤트 제거
  
    try {
      const encodedDate = encodeURIComponent(formData.GAT_PLAN_DATE);
      const queryString = Object.entries(formData)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
      const res = await axios.get(`/api/board?${queryString}`);
      console.log(res);
      // 작성 완료 안내 팝업창
      alert('글이 성공적으로 작성되었습니다.');
    } catch (error) {
      console.error('글 작성에 실패했습니다:', error);
      // 실패 시 에러 메시지 팝업창
      alert('글 작성에 실패했습니다.');
    }
  };
  
  return (
    <div className="App">
      <h1>일정 생성</h1>
      <form onSubmit={handleWriteSubmit}>
        <label>
          만날 날짜:
          <input
            type="date"
            name="GAT_PLAN_DATE"
            value={formData.GAT_PLAN_DATE}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          만날 장소(도로명 주소):
          <input
            type="text"
            name="GAT_PLAN_ADDR"
            value={formData.GAT_PLAN_ADDR}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          만날 장소(상세 주소):
          <input
            type="text"
            name="GAT_PLAN_ADDR_DETAIL"
            value={formData.GAT_PLAN_ADDR_DETAIL}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          일정 제목:
          <input
            type="text"
            name="GAT_PLAN_TITLE"
            value={formData.GAT_PLAN_TITLE}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          일정 설명:
          <textarea
            name="GAT_PLAN_DESC"
            value={formData.GAT_PLAN_DESC}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          일정 생성자 ID:
          <input
            type="text"
            name="GATHERING_GAT_ID"
            value={formData.GATHERING_GAT_ID}
            onChange={handleChange}
            required
            disabled // 사용자가 수정할 필요 없으므로 비활성화
          />
        </label>
        <button type="submit">일정 생성</button>
      </form>
    </div>
  );
}

export default App;















