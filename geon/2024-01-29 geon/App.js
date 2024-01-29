import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import qs from 'qs';
import $ from 'jquery'; // jQuery import 추가

const WriteContent = () => {
  const [memberId, setMemberId] = useState('');
  const [nickname, setNickname] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imageSize, setImageSize] = useState('');
  const [imageName1, setImageName1] = useState('');
  const [imageName2, setImageName2] = useState('');

  const handleWriteSubmit = async () => {
    try {
      const res = await axios.get("/api/board", {
        params: {
          MEMBER_MEM_ID: $(".input-mem-id").val(),
          MEMBER_MEM_NNAME: $(".input-nickname").val(),
          BOARD_TITLE: $(".input-title").val(),
          BOARD_DESC: $(".input-desc").val(),
          BOARD_IMG_NAME1: $(".input-imageName1").val(),
          BOARD_IMG_NAME2: $(".input-imageName2").val(),
          BOARD_IMG_BYTE: $(".input-imageSize").val(),
          BOARD_IMAGE: $(".input-image").val(),
        },
        paramsSerializer: params => {
          return qs.stringify(params, { arrayFormat: 'brackets' });
        }
      });
      console.log(res);
      // 작성 완료 안내 팝업창
      alert('글이 성공적으로 작성되었습니다.');
    } catch (error) {
      console.error('글 작성에 실패했습니다:', error);
      // 실패 시 에러 메시지 팝업창
      alert('글 작성에 실패했습니다.');
    }
  };

  useEffect(() => {
    // 사용자 정보 로드 및 설정 코드 작성
    fetchMemberInfo();
  }, []);

  const fetchMemberInfo = async () => {
    try {
      const response = await axios.get("/api/member"); // 예시 URL, 실제 URL로 수정 필요
      const { memberId } = response.data;
      setMemberId(memberId);
    } catch (error) {
      console.error('사용자 정보를 불러오는데 실패했습니다:', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    $(document).ready(function() {
      const fileSize = file.size;
      setImageSize(fileSize);

      const randomSuffix = Math.random().toString(36).substring(7);
      const filenameParts = file.name.split('.');
      const filename = `${filenameParts[0]}_${randomSuffix}.${filenameParts[1]}`;
      setImageName1(filenameParts[0]);
      setImageName2(randomSuffix);
    });
  };

  return (
    <div className="board">
      <h2>글 작성하기</h2>
      
        <label>작성자 ID:  </label>
        <input type="text2" value={memberId} readOnly className='input-mem-id' />
    
  
        <input type="text2" placeholder="닉네임을 입력하세요" value={nickname} onChange={(e) => setNickname(e.target.value)} className='input-nickname' />

      <input type="text3" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)}  className='input-title'/> 

      <textarea placeholder="내용" value={description} onChange={(e) => setDescription(e.target.value)} className='input-desc'/>

      <div className="input-container">
        <input id="imageInput" type="file" accept="image/*" onChange={handleImageChange} className={`$BOARD_IMG_NAME1 BOARD_IMG_BYTE`}/>
        {imageSize && <p>이미지 크기: {imageSize} bytes</p>}
      </div>

      <div className="button-container">
        <button onClick={handleWriteSubmit}>작성 완료</button>
        <button onClick={() => window.location.reload()}>취소</button>
      </div>

    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <WriteContent />
    </div>
  );
};

export default App;

















