import React, { useState } from 'react';
// install bootstrap 이건가 해야함
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [hovered, setHovered] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");

  const checkPasswordMatch = () => {
    const pwd = document.getElementById("mem_pwd").value;
    const pwd2 = document.getElementById("mem_pwd2").value;

    if (pwd === pwd2 && pwd !== '' && pwd2 !== '') {
      setPasswordMatch('비밀번호와 비밀번호 확인이 일치합니다.');
      document.querySelector('.password-check').classList.add('green');
      document.querySelector('.password-check').classList.remove('red');
    } else {
      setPasswordMatch('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      document.querySelector('.password-check').classList.add('red');
      document.querySelector('.password-check').classList.remove('green');
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setImage("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
  };

  const resetForm = () => {
    document.querySelector('form').reset();
    setPasswordMatch('');
  };

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <div className="App">
      <nav className="navbar">
        nav
      </nav>
      <br />

      <div className="container">
        <div className="col-lg-4">
          <div className="jumbotron" style={{ paddingTop: "20px" }}>
            <form method="post" onSubmit={handleSubmit}>
              <h1 style={{ textAlign: "center" }}>회원 정보 수정</h1>
              
              {/* 프로필 사진 */}
              <img
                src={image}
                alt="프로필 사진"
                style={{ margin: '20px', width: '100px', height: '100px', cursor: 'pointer', borderRadius: '30px'}}
                onClick={() => { document.getElementById('imageInput').click(); }}
              />
              <input
                type="file"
                id="imageInput"
                style={{ display: 'none' }}
                onChange={handleImageChange}
                name='profile'
              />
              <button
                type="button"
                className={`btn btn-danger btn-gray ${hovered ? 'hovered' : ''}`}
                onClick={() => {
                  handleImageDelete();
                }}
                style={{
                  marginTop: '10px',
                  backgroundColor: 'darkGray',
                  border: '1px solid black'
                }}
                onMouseOver={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}
              >
                프로필 사진 삭제
              </button><br />

              <div className="form-group">
                <input type="text" className="form-control" placeholder="아이디" name="mem" maxLength="15" required style={{ border: '1px solid black' }} readOnly /><br />
              </div>
              <div className="form-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  placeholder="비밀번호"
                  name="mem_pwd"
                  id="mem_pwd"
                  maxLength="15"
                  required
                  style={{ border: '1px solid black' }}
                  onChange={checkPasswordMatch}
                /><br />
              </div>
              <div className="form-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  placeholder="비밀번호 확인"
                  name="mem_pwd2"
                  id="mem_pwd2"
                  maxLength="15"
                  style={{ border: '1px solid black' }}
                  required
                  onChange={checkPasswordMatch}
                /><br />
                <p className={`password-check ${passwordMatch.includes('일치') ? 'green' : 'red'}`} name="text">
                  {passwordMatch}
                </p>
              </div>
             
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="showPassword"
                  onChange={handleCheckboxChange}
                  style={{ border: '1px solid black' }}
                />
                <label className="form-check-label" htmlFor="showPassword">
                  비밀 번호 보기
                </label>
              </div>
              <br />
              <input
                type="submit"
                className={`btn btn-primary form-control btn-gray ${hovered ? 'hovered' : ''}`}
                onMouseOver={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}
                value="수정"
                style={{ border: '1px solid black' }}
              />
            </form>
            <br />
            <button
              type="button"
              className={`btn btn-primary form-control btn-gray ${hovered ? 'hovered' : ''}`}
              onMouseOver={() => setHovered(true)}
              onMouseOut={() => setHovered(false)}
              onClick={resetForm}
              style={{ border: '1px solid black' }}
            >
              다시 작성
            </button>

            <button
              type="button"
              className={`btn btn-primary form-control btn-gray ${hovered ? 'hovered' : ''}`}
              onMouseOver={() => setHovered(true)}
              onMouseOut={() => setHovered(false)}
              style={{ border: '1px solid black' }}
            >
              <a href='#' className='uphome'>
                메인 으로
              </a>
            </button>
            <button
              type="button"
              className={`btn btn-primary form-control btn-gray ${hovered ? 'hovered' : ''}`}
              onMouseOver={() => setHovered(true)}
              onMouseOut={() => setHovered(false)}
              style={{ border: '1px solid black' }}
            >
              <a href='#' className='uphome'>
                뒤로 가기
              </a>
            </button>
          </div>
        </div>
      </div>

      <br />

      <div className="footer">
        footer
      </div>
    </div>
  );
}

export default App;
