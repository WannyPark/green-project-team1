import '../css/login.css';  // 해당 CSS 파일 import
import React, { useState } from 'react';
import $ from 'jquery'
import Navi from './Navi';
import axios from 'axios';
import qs from 'qs';


function App() {

  const [res, setRes] = useState(0);

  const reqApiLogin = async () => {
    const res = await (await axios.get("/api/login", {
      params:{
        id:$("#input-id").val(),
        pw:$("#input-pw").val(),
      },
      paramsSerializer: params => {
        return qs.stringify(params, {arrayFormat:'brackets'})
      }
    }
    )).data;
    console.log(res);
  }

  function change_view1() {
    $(".forgot-pw").fadeOut(500, () => {
      $(".find-pw").slideDown(1000);
    });
    $(".login-view").slideUp(500, () => {
      $(".go-login").fadeIn(1000);
    });
  }

  function login_check() {
    let id_length = $("#input-id").val().length;
    let pw_length = $("#input-pw").val().length;
    if (id_length < 1) {
      alert("아이디를 입력해주세요.");
      return false;
    }
    if (pw_length < 1) {
      alert("비밀번호를 입력해주세요.");
      return false;
    } else {
      reqApiLogin();
    }
  }

  function find_pw_check() {
    let id_length = $("#find_pw_id").val().length;
    let name_length = $("#find_pw_name").val().length;
    let email_length = $("#find_pw_email").val().length;
    if (id_length < 1) {
      alert("아이디를 입력해주세요.");
      return false;
    }
    if (name_length < 1) {
      alert("이름을 입력해주세요.");
      return false;
    }
    if (email_length < 1) {
      alert("이메일을 입력해주세요.");
      return false;
    } else {
      return true;
    }
  }

  function change_view2() {
    $(".find-pw").slideUp(500, () => {
      $(".forgot-pw").fadeIn(1000);
    });
    $(".go-login").fadeOut(500, () => {
      $(".login-view").slideDown(1000);
    });
  }

  return (
    <div className='App'>
      <Navi />
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
                <input type="text" placeholder='아이디' className='input' id='find_pw_id'></input>
              </div>
              <div className='input-name'>
                <input type="text" placeholder='이름' className='input' id='find_pw_name'></input>
              </div>
              <div className='input-email'>
                <input type="email" placeholder='이메일' className='input' id='find_pw_email'></input>
              </div>
              <div className='sbm'>
                <input className='btn2' type="button" value="다음" onClick={find_pw_check}></input>
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
                <input type="text" placeholder='아이디' className='input' id='input-id'></input>
              </div>
              <div className='input-pw'>
                <input type="text" placeholder='비밀번호' className='input' id='input-pw'></input>
              </div>
              <div className='go-sign-up'>
                <a href='/sign_up'>회원가입 하러가기</a>
              </div>
              <div className='sbm'>
                <input className='btn1' type="button" value="로그인" onClick={login_check}></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
