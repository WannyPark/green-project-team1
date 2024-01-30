import './App.css';  // 해당 CSS 파일 import
import React, { useState } from 'react';
import axios from 'axios';
import $ from 'jquery';
import Footer from './foot';
import qs from 'qs';

function App() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [inputNum, setInputNum] = useState('');
  const [inputNewPw, setInputNewPw] = useState('');
  const [inputNewPw2, setInputNewPw2] = useState('');

  const sendEmail = async () => {
    console.log('sendEmail function is called!');
    try {
      const response = await axios.get('/api/email', {
        params: {
          id: id,
          name: name,
          email: email,
        },
        paramsSerializer: params => {
          return qs.stringify(params, { arrayFormat: 'brackets' });
        },
      });

      console.log(response.data.code); // 서버에서의 응답 확인
      console.log(response.data.res); // 서버에서의 응답 확인
      
      
      // if (code !== input-num) {
      //   alert('인증번호가 틀렸습니다.');
      // } else if (input-newpw !== input-newpw2) {
      //   alert('비밀번호가 다릅니다.');
      // } else {
      //   // 여기에서 서버로 변경된 비밀번호와 인증 정보를 전송하는 로직을 추가하세요.
      //   // 서버로의 전송이 성공하면 change_view3 함수 호출 등의 로직을 추가할 수 있습니다.
      // }
  
      if (response.data.res === '0') {
        // 아이디가 존재하지 않는 경우
        console.log('입력하신 정보가 존재하지 않습니다.');
        alert('입력하신 정보가 존재하지 않습니다.');
      }else if(response.data.res === '-1'){
        alert('이메일 발송에 실패했습니다.');
      }
       else {
        // 모두 일치하는 경우
        console.log('이메일이 발송되었습니다.');
        const userInputCode = prompt('이메일로 받은 인증 코드를 입력하세요:');
        if (userInputCode === response.data.code) {
          // 검증 성공
          console.log('인증 성공');
          change_view3();
        } else {
          // 검증 실패
          console.log('인증 실패');
          alert('인증 코드가 올바르지 않습니다. 새로운 인증코드를 받아서 입력해주세요');
      }
    }
    } catch (error) {
      console.error('Error sending email:', error);
      // 서버 에러 또는 다른 이유로 이메일 발송이 실패한 경우
      alert('이메일 발송에 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  function change_view1() {
    $(".forgot-pw").fadeOut(500, () => {
      $(".find-pw").slideDown(1000);
    });
    $(".login-view").slideUp(500, () => {
      $(".go-login").fadeIn(1000);
    });
  }

  function change_view2() {
    $(".find-pw").slideUp(500, () => {
      $(".forgot-pw").fadeIn(1000);
    });
    $(".go-login").fadeOut(500, () => {
      $(".login-view").slideDown(1000);
    });
  }

  function change_view3() {
    $(".find-pw").fadeOut(500, () => {
      $(".change-pw").slideDown(1000);
    });
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
                <input
                  type="text"
                  placeholder='아이디'
                  className='input'
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                ></input>
              </div>
              <div className='input-name'>
                <input
                  type="text"
                  placeholder='이름'
                  className='input'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className='input-email'>
                <input
                  type="email"
                  placeholder='이메일'
                  className='input'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className='sbm'>
                <input
                  className='btn2'
                  type="button"
                  onClick={() => { sendEmail()}}
                  value="다음"
                ></input>
              </div>
            </div>

            <div className='change-pw'>
              <div className='title2'>
                비밀번호 변경
              </div>
              {/* <div className='input-num'>
                <input type="text" placeholder='인증번호' className='input'
                value={code}
                onChange={(e) => setCode(e.target.value)}
                ></input>
              </div> */}
              <div className='input-newpw'>
                <input type="password" placeholder='새로운 비밀번호' className='input'
                value={inputNewPw}
                onChange={(e) => setInputNewPw(e.target.value)}
                ></input>
              </div>
              <div className='input-newpw2'>
                <input type="password" placeholder='한번더 입력해주세요' className='input'
                value={inputNewPw2}
                onChange={(e) => setInputNewPw2(e.target.value)}
                ></input>
              </div>
              <div className='sbm'>
                <input className='btn2' type="button" value="확인"></input>
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
      <Footer />
    </div>
  );
}

export default App;
