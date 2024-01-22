import React, { useEffect, useState } from "react";
import '../css/login.css';

import Button from "react-bootstrap/Button";
// import Collapse from 'react-bootstrap/Collapse';
import { Input } from "reactstrap";
import AOS from "aos";
import '../css/aos.css';
import $ from 'jquery';
import DaumPostcode from 'react-daum-postcode';

const Login = () => {
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
          return true;
        }
    };

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
            <div className="adress_table"style={{border: '1px solid gray', padding:'7px 15px'}}>
                <div className="background2" data-aos="fade-up">
                    <div className="adress_header">
                        <p className="adressText">회원가입</p>
                    </div>
                    <div className="adress_id">
                        *아이디<Input type="text" id="memberId" placeholder="아이디를 입력해 주세요!" />
                    </div>
                    <div className="adress_pw">
                        *비밀번호<Input type="password" id="memberPw" value={memberPw} onChange={(e) => setMemberPw(e.target.value)} placeholder="비밀번호를 입력해 주세요!" />
                    </div>
                    <div className="adress_pw_ok">
                        *비밀번호 확인<Input type="password" id="memberPwOk" value={memberPwOk} onChange={(e) => setMemberPwOk(e.target.value)} placeholder="비밀번호를 다시 입력해 주세요!" />
                    </div>
                    <div className="adress_email">
                        *이메일<Input type="text" id="memberEmail" placeholder="이메일을 입력해 주세요!" />
                    </div>
                    <div className="adress_name">
                        *이름<Input type="text" id="memberName" placeholder="이름을 입력해 주세요!" />
                    </div>
                    <div className="adress_birthDay">
                        <label htmlFor="birthDay">*생년월일</label>
                        <input size="30" type="date" class="birthDay" name="birthDay" min="1900-01-01" max="2099-12-31" required/>
                    </div>
                    <input type="radio" name="chk_gender" value="남자" />남자
                    <input type="radio" name="chk_gender" value="여자" />여자
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
                    {/* <div>
                        <Button className={`accordion-button ${collapseOpen ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded={collapseOpen ? 'true' : 'false'} aria-controls="flush-collapseOne" onClick={handleToggle}>
                            <label><input type="checkbox" required /> 홈페이지 이용약관</label></Button>
                    </div>
                    <Collapse in={collapseOpen}>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">제1조(목적) 이 약관은 반려동물사진관(이하 "회사"라 한다.)이 운영하는 인터넷 홈페이지(이하"홈페이지라 한다.) 에서 제공하는 인터넷 관련 서비스(이하"서비스"라한다)를 이용함에 있어 홈페이지와 이용자의 권리ㆍ의무 및 책임, 기타 제반 사항의 규정을 목적으로 합니다. </div>
                        </div>
                    </Collapse> */}
                    <div>
                        <Button className="Adress_btn" id="id_btn" variant="light" size="lg-3  " 
                            style={{ whiteSpace: 'nowrap', margin: '0 auto', border: '1px solid gray', padding:'7px 15px'}} onClick={passwordChk}>Adress</Button>
                    </div>
                </div>
            </div>
            <div className="login_table"style={{border: '1px solid gray', padding:'7px 15px'}}>
                <div className="background1" data-aos="fade-up">
                    <div className="login_header">
                        <p className="loginText">로그인</p>
                    </div>
                    <div className="login_id">
                        <Input type="text" id="memberId" placeholder="아이디"/>
                    </div>
                    <div className="login_pw">
                        <Input type="password" id="memberPw" placeholder="비밀번호"/>
                    </div>
                    <div>
                        <Button className="Login_btn" id="id_btn" variant="light" size="lg-3  " 
                                        style={{ whiteSpace: 'nowrap', margin: '0 auto', border: '1px solid gray', padding:'7px 15px'}}>Sign In</Button>
                        <Button className="Adress_btn" id="adress_btn" variant="light" size="lg-3  " 
                                        style={{ whiteSpace: 'nowrap', margin: '0 auto', border: '1px solid gray', padding:'7px 15px'}} onClick={adress}>회원가입</Button>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default Login;