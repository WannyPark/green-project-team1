import React, { useEffect, useState  } from "react";
import '../css/adress.css';

import Button from "react-bootstrap/Button";
import { Input } from "reactstrap";
import AOS from "aos";
import '../css/aos.css'
import DaumPostcode from 'react-daum-postcode';

const Adress = () => {
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
        }
    };
    const handleIdChange = (e) => setMemberId(e.target.value);
    const handlePwChange = (e) => setMemberPw(e.target.value);
    const handlePwOkChange = (e) => setMemberPwOk(e.target.value);
    
    const handleAdressSearch = () => {
      // 주소 검색 버튼 클릭 이벤트에 대한 로직 추가
      setModalState(true); // 주소 검색 모달 열기
    };
    
    return (
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
                    *주소<Input type="text" id="memberAdress"/>
                </div>
                <div>
                    <DaumPostcode
                    style={postCodeStyle}
                    onComplete={onCompletePost}
                    ></DaumPostcode>
                </div>
                <div>
                    <Button onClick={handleAdressSearch}>우편번호 찾기</Button>
                    <Button className="Adress_btn" id="id_btn" variant="light" size="lg-3" 
                                    style={{ whiteSpace: 'nowrap', margin: '0 auto', border: '1px solid gray', padding:'7px 15px'}} onClick={passwordChk}>Adress</Button>
                </div>
            </div>
        </div>
    );
  };
  
  export default Adress;