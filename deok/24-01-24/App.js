import './App.css';  // 해당 CSS 파일 import
import React, { useState } from 'react';
import $ from 'jquery'

function App() {

  function change_view1() {
    $(".forgot-pw").fadeOut(500, () => {
      $(".find-pw").slideDown(1000);
    });
    $(".login-view").slideUp(500, () => {
      $(".go-login").fadeIn(1000);
    });
    // $(".find-pw").css("display","block");
    // $(".forgot-pw").css("display","none");
    // $(".login-view").css("display","none");
    // $(".go-login").css("display","block");
  }

  function change_view2() {
    $(".find-pw").slideUp(500, () => {
      $(".forgot-pw").fadeIn(1000);
    });
    $(".go-login").fadeOut(500, () => {
      $(".login-view").slideDown(1000);
    });
    // $(".find-pw").css("display","none");
    // $(".forgot-pw").css("display","block");
    // $(".login-view").css("display","block");
    // $(".go-login").css("display","none");
  }

  return (
    <div className='App'>
      <div className='nav'></div>
      <div className='container'>
        <div className='real-container'>
          <div className='left-view'>
            <div className='forgot-pw'>
              <button className='btn1' onClick={change_view1}>비밀번호를 잃어버리셨습니까?</button>
            </div>
            <div className='find-pw'>
              <div className='title'>
                비밀번호 찾기
              </div>
              <div className='input-id'>
                <input type="text" placeholder='아이디' className='input'></input>
              </div>
              <div className='input-name'>
                <input type="text" placeholder='이름' className='input'></input>
              </div>
              <div className='input-email'>
                <input type="email" placeholder='이메일' className='input'></input>
              </div>
              <div className='sbm'>
                <input className='btn2' type="button" value="다음"></input>
              </div>
            </div>
          </div>
          <div className='right-view'>
            <div className='go-login'>
              <button className='btn2' onClick={change_view2}>로그인 하러가기</button>
            </div>
            <div className='login-view'>
              <div className='title'>
                방문을 환영합니다.
              </div>
              <div className='input-id'>
                <input type="text" placeholder='아이디' className='input'></input>
              </div>
              <div className='input-pw'>
                <input type="text" placeholder='비밀번호' className='input'></input>
              </div>
              <div className='go-sign-up'>
                <a href='/sign_up'>회원가입 하러가기</a>
              </div>
              <div className='sbm'>
                <input className='btn1' type="button" value="로그인"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
