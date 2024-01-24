import React, { useEffect, useState  } from "react";
import '../css/adress.css';

import Button from "react-bootstrap/Button";
import { Input } from "reactstrap";
import AOS from "aos";
import '../css/aos.css'
import DaumPostcode from 'react-daum-postcode';
import $ from 'jquery';

const Adress = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    });
    
    const [memberId, setMemberId] = useState(''); // 아이디 상태 추가
    const [memberPw, setMemberPw] = useState(''); // 비밀번호 상태 추가
    const [memberPwOk, setMemberPwOk] = useState(''); // 비밀번호 확인 상태 추가
    // 이메일 상태 추가
    const [memberEmail, setMemberEmail] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleMemberIdChange = (event) => {
        const newMemberId = event.target.value;
        setMemberId(newMemberId);
      };
    const handleMemberIdBlur = () => {
        if (memberId.trim() === '') {
          alert('아이디를 입력해 주세요!');
        }
      };

    const passwordChk = () => {
        if (memberId.trim() === '') {
            alert('아이디를 입력해 주세요!');
            return false;
        }
        if (memberPw.length < 6) {
          alert("비밀번호를 6글자 이상으로 입력해 주세요!");
          return false;
        }
        
        if (memberPw !== memberPwOk) {
            alert("비밀번호가 일치하지 않습니다");
            return false;
        } 
        // if (memberEmail.trim() === '') {
        //     alert('이메일를 입력해 주세요!');
        //     return false;
        // } 
        else {
            return true;
        }
    };

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
    
        // 이메일 형식 검사
        if (newEmail.trim() === '') {
          setErrorMessage('이메일을 입력해 주세요!');
        } else if (!isValidEmail(newEmail)) {
          setErrorMessage('올바른 이메일 형식이 아닙니다!');
        } else {
          setErrorMessage('');
        }
      };
    
      const isValidEmail = (value) => {
        // 간단한 이메일 형식 정규표현식
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      };

    // 주소 Api
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
            $(".adr1").val(data.zonecode); // 우편번호 데이터 저장
            $(".adr2").val(data.address); // 주소 데이터 저장
        }
    };
    const handleIdChange = (e) => setMemberId(e.target.value); 
    const handlePwChange = (e) => setMemberPw(e.target.value);
    const handlePwOkChange = (e) => setMemberPwOk(e.target.value);
    const memberEmailChange = (e) => setMemberEmail(e.target.value);
    
    const handleAdressSearch = () => {
      // 주소 검색 버튼 클릭 이벤트에 대한 로직 추가
      setModalState(true); // 주소 검색 모달 열기
    };
    
    return (
        <div className="adress_table" data-aos="zoom-in">
            <div className="background2">
                <div className="adress_header">
                    <p className="adressText">회원가입</p>
                </div>
                <div className="adress_id">
                *아이디<Input type="text" id="memberId" placeholder="아이디를 입력해 주세요!" onChange={handleMemberIdChange} onBlur={handleMemberIdBlur}/>
                </div>
                <div className="adress_pw">
                *비밀번호<Input type="password" id="memberPw" value={memberPw} onChange={(e) => setMemberPw(e.target.value)} placeholder="비밀번호를 입력해 주세요!" />
                </div>
                <div className="adress_pw_ok">
                *비밀번호 확인<Input type="password" id="memberPwOk" value={memberPwOk} onChange={(e) => setMemberPwOk(e.target.value)} placeholder="비밀번호를 다시 입력해 주세요!" />
                </div>
                <div className="adress_email">
                    *이메일<Input type="text" id="memberEmail" placeholder="이메일을 입력해 주세요!" value={email} onChange={handleEmailChange} />
                    {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                </div>
                <div className="adress_name">
                    *이름<Input type="text" id="memberName" placeholder="이름을 입력해 주세요!" />
                </div>
                <div className="adress_birthDay">
                    <label htmlFor="birthDay">*생년월일</label>
                    <Input size="30" type="date" class="birthDay" name="birthDay" min="1900-01-01" max="2099-12-31" required/>
                </div>
                <Input type="radio" name="chk_gender" value="남자" />남자
                <Input type="radio" name="chk_gender" value="여자" />여자
                <div className="adress_text">
                    *주소<br></br>
                    <Input type="text" className="adr1" id="memberAdr1" placeholder="우편번호"/><br></br>

                    <DaumPostcode
                    style={postCodeStyle}
                    onComplete={onCompletePost}
                    ></DaumPostcode>
                    <Button onClick={handleAdressSearch}>우편번호 찾기</Button><br></br>

                    <Input type="text" className="adr2" id="memberAdr2" placeholder="주소"/><br></br>
                    <Input type="text" className="adr3" id="memberAdr3" placeholder="상세 주소"/>
                </div>
                <div className="btn_start">
                    <Button className="Adress_btn" id="id_btn" variant="light" size="lg-3" 
                                    style={{ whiteSpace: 'nowrap', margin: '0 auto', border: '1px solid gray', padding:'7px 15px'}} onClick={passwordChk}>Adress</Button>
                </div>
            </div>
        </div>
    );
  };
  
  export default Adress;