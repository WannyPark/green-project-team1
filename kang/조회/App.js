import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from "axios";
import qs from "qs";

function App() {
  const [hovered, setHovered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
  const [selectedImage, setSelectedImage] = useState(null);
  const [list, setList] = useState([]);
  
  // const [mem, setMem] = useState([]);
  // const [qMem, setQMem] = useState([]);

  


 
 

  const [id, setId] = useState("");


  const resetForm = () => {
    document.querySelector('form').reset();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
  };
  console.log(typeof memberInfo);
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
              <h3 style={{ textAlign: "center" }}>회원 정보</h3>
              
              {/* 프로필 사진 */}
              <img
                src={image}
                alt="프로필 사진"
                style={{ margin: '20px', width: '100px', height: '100px', cursor: 'pointer' , borderRadius: '30px'
              }}
                onClick={() => { document.getElementById('imageInput').click(); }}
                
              />
              <input
                type="file"
                id="imageInput"
                style={{ display: 'none' }}
                onChange={handleImageChange}
                name='profile'
                disabled
              />
             
              <div className="form-group">
                <input type="text" className="form-control" placeholder="아이디" name="mem" maxLength="15" required style={{ border: '1px solid black' }} value={id} readOnly /><br />
              </div>
              <div className="form-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="비밀번호"
                  name="mem_pwd"
                  id="mem_pwd"
                  maxLength="15"
                  style={{ border: '1px solid black' }}
                /><br />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="showPassword"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  style={{ border: '1px solid black' }}
                />
                <label className="form-check-label" htmlFor="showPassword">
                  비밀번호 보기
                </label>
              </div>
              <br />
              <div className="form-group">
                <input type="text" className="form-control" placeholder="회원등급" name="mem_grade" maxLength="15" required style={{ border: '1px solid black' }} readOnly /><br />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="이름" name="mem_name" maxLength="15" required style={{ border: '1px solid black' }} readOnly /><br />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="생일" name="mem_birthday" maxLength="50" required style={{ border: '1px solid black' }} readOnly /><br />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="이메일 ( ex : kim@naver.com )" name="mem_email" maxLength="100"  style={{ border: '1px solid black' }} readOnly /><br />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="주소" name="mem_add" maxLength="100"  style={{ border: '1px solid black' }} readOnly /><br />
              </div>
              <br />
              <input
                type="button"
                className={`btn btn-primary form-control btn-gray ${hovered ? 'hovered' : ''}`}
                onMouseOver={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}
                value="비밀 번호 수정"
                style={{ border: '1px solid black' }}
              />
              <input
                type="button"
                className={`btn btn-primary form-control btn-gray ${hovered ? 'hovered' : ''}`}
                onMouseOver={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}
                value="회원 탈퇴"
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
              <a href='#' className='uphome'>
                메인 으로
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
