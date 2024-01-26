import React, { useEffect, useState } from "react";
import '../css/login3.css';
import logoImage from '../images/login_logo.png';

import Button from "react-bootstrap/Button";
// import Collapse from 'react-bootstrap/Collapse';
import { Input } from "reactstrap";
import AOS from "aos";
import '../css/aos.css';
import $ from 'jquery';
import DaumPostcode from 'react-daum-postcode';
import axios from "axios";
import qs from "qs";

const Login3 = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    });

    const [memberId, setMemberId] = useState(''); // 아이디 상태 추가
    const [memberPw, setMemberPw] = useState(''); // 비밀번호 상태 추가
    const [memberPwOk, setMemberPwOk] = useState(''); // 비밀번호 확인 상태 추가
    const passwordChk = () => {
        if (memberPw.length < 6) {
            alert("비밀번호를 6글자 이상으로 입력해 주세요!");
            return false;
        }
        if (memberPw !== memberPwOk) {
          alert("비밀번호가 일치하지 않습니다");
          return false;
        } else {
            reqMem();
        }
    };

    const reqMem = async () => {
        const res = await (await axios.get("/api/reqMem", {
          params:{
            uid:$("#memberId").val(),
            pwd:$("#memberPw").val(),
            email:$("#memberEmail").val(),
            name:$("#memberName").val(),
            birthday:$(".birthDay").val(),
            address:$("#memberAdr2").val()
          },
          paramsSerializer: params => {
            return qs.stringify(params, {arrayFormat:'brackets'})
          }
        }
        )).data;
        console.log(res);
        if (res) {
            // 회원가입 되었을때
            alert("회원가입 되었습니다.");

        } else {
            alert("회원가입에 실패했습니다.");
            return;
        }
    }
    // window.location.href = "/home"


    const [modalState, setModalState] = useState(false);
    const [inputAddressValue, setInputAddressValue] = useState('');
    const [inputZipCodeValue, setInputZipCodeValue] = useState('');
    
    const postCodeStyle = {
        width: '400px',
        height: '400px',
        display: modalState ? 'block' : 'none',
    };  

    const onCompletePost = (data) => {
        setModalState(false);
        if (data) {
            setInputAddressValue(data.address || '');
            setInputZipCodeValue(data.zonecode || '');
            $(".adr1").val(data.zonecode);
            $(".adr2").val(data.address);
        }
    };
    const handleIdChange = (e) => setMemberId(e.target.value);
    const handlePwChange = (e) => setMemberPw(e.target.value);
    const handlePwOkChange = (e) => setMemberPwOk(e.target.value);
    
    const handleAdressSearch = () => {
      // 주소 검색 버튼 클릭 이벤트에 대한 로직 추가
      setModalState(true); // 주소 검색 모달 열기
    };

    // 약관동의
    // const [collapseOpen, setCollapseOpen] = useState(false);
    // const handleToggle = () => {
    //   setCollapseOpen(!collapseOpen);
    // };

function adress() {
    // $(".login_table").css("display", "none");
    // $(".background2").css("display", "block");
    $(".login_table").css("visibility", "hidden");
    $(".adress_table").css("visibility", "visible");
    $(".background2").css("visibility", "visible");
}

    return (
        <div>
            <a href="main.html"class="logo" >
                <img src={logoImage} alt="반려동물사진관_로그인_로고이미지" />
            </a>
            <div className="container right-panel-active">
                <div className="container__form container--password">
                    <form action="#" className="form" id="form2">
                        <h2 className="form__title">방문을 환영합니다.</h2>
                        <input type="email" placeholder="아이디" className="input" />
                        <input type="password" placeholder="패스워드" className="input" />
                        <a href="sign_up.html" className="link">회원가입 하러가기</a>
                        <button className="btn2">로그인</button>
                    </form>
                </div>

                <div className="container__form container--signin">
                    <form action="#" className="form" id="form1">
                    <h2 className="form__title">비밀번호 찾기</h2>
                    <input type="text" placeholder="아이디" className="input" />
                    <input type="name" placeholder="이름" className="input" />
                    <input type="email" placeholder="Email" className="input" />
                    <button className="btn1">다음</button>
                    </form>
                </div>

                 <div className="container__overlay">
                    <div className="overlay">

                        <div className="overlay__panel overlay--right">
                            <button className="btn1" id="password">로그인 하러가기</button>
                        </div>
                        <div className="overlay__panel overlay--left">
                            <button className="btn2" id="signIn">비밀번호를 잃어버리셨습니까?</button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="layer">
                <form action="#" className="form2" id="form2">
                    <h2 className="form__title">비밀번호 찾기</h2>
                    <input type="text" placeholder="아이디" className="input2" />
                    <input type="name" placeholder="이름" className="input2" />
                    <input type="email" placeholder="Email" className="input2" />
                    <button className="btn3">다음</button>
                </form>
                <a href="#" className="close">닫기</a>
            </div>

            <footer id="footer">
                <div class="container2">
                    <div class="footer">
                        <div class="f_logo">
                            <img src={logoImage} alt="반려동물사진관_로그인_로고이미지" />
                        </div>
                        <div class="f_menu">
                            <a href="#">이용약관</a>
                            <a href="#">개인정보처리방침</a>
                            <a href="#">고객문의</a>
                            <a href="#">이메일 문의</a>
                        </div>
                        <div class="f_made">
                            <p href="#">제작</p>
                            <p href="#">이경동</p>
                            <p href="#">이경동</p>
                            <p href="#">이경동</p>
                            <p href="#">이경동</p>
                            <p href="#">이경동</p>
                            <p href="#">이경동</p>
                        </div>
                        <div class="f_copy">
                            Copyright A PET PHOTO STUDIO. All Rights Reserved.
                        </div>
                        <div class="f_sns">
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
  };
  
  export default Login3;