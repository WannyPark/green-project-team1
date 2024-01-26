import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import '../css/board_list_details.css';

import AOS from "aos";

const Board_list_details = () => {
  useEffect(() => {
      AOS.init({ duration: 2000 });
  });


  return (
    <div className='list_details1' data-aos="fade-right">
      <div className='list_details2'>
        <div className='li_box'>
          <p className='li'>게시글 아이디: </p>
        </div>
        <div className='li_box'>
          <p className='li'>제목: </p>
        </div>
        <div className='li_box'>
          <p className='li'>내용: </p>
        </div>
        <div className='li_box'>
          <p className='li'>이미지: </p>
        </div>
        <div className='li_box'>
          <p className='li'>작성일: </p>
        </div>
        <div className='li_box'>
          <p className='li'>조회수: </p>
        </div>
      </div>
      <div className='list_details3'>
          <div>
            게시글 아이디
          </div>
          <div>
            제목
          </div>
          <div>
            내용
          </div>
          <div>
            이미지
          </div>
          <div>
            작성일
          </div>
          <div>
            조회수
          </div>
        </div>
    </div>
  );
};

  export default Board_list_details;