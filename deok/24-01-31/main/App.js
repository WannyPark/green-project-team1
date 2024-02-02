import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
// import Navi from './Navi';
import axios from 'axios';
import $, { param } from 'jquery';
import './App.css';



function Home() {
  
	useEffect(() => {
		AOS.init();
	})
  
  const [searchResults, setSearchResults] = useState([]);
  const [userInput, setUserInput] = useState('');

  const clickEv = () => {
    if ($(".Search-input").val().length < 2) {
      alert("검색 키워드를 2자 이상 작성해주세요.");
      return false;
    }
    $(".searchArea").animate({ marginTop: "10px" }, 1000, function () {});
    $(".aos").css("visibility", "visible").hide().slideDown(1000);
  };

  const keyPress = (a) =>{
    if (a.key === 'Enter'){
      clickEv();
    }
  };

  const click_logo = () => {
    document.location.href="/";
  }
  
  




	return (
        <div className="App">
          {/* <Navi /> */}
          <div className='searchArea'>
            {/* <div className='logo' onClick={click_logo}><h1>Dog's Life</h1></div> */}
            <div className='Search'>
              <select className='select'>
                <option> 지역 </option>
                <option> 모임명 </option>
              </select>
              <input
                className="Search-input"
                type='text'
                placeholder='모임을 찾아보세요'
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={keyPress}
              />
              <button className="submit-button"  onClick={clickEv}>검 색</button>
            </div>
                  {/* <div >
                    <div className='item'>11</div>
                    <div className='item'>22</div>
                  </div> */}
            <div className='aos' data-aos="fade-up">
              {searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                  <div key={index}>
                    <div className='item'>11{result.title}</div>
                    <div className='item'>22{result.link}</div>
                  </div>
                ))
              ) : (
                <div>검색 결과가 없습니다.</div>
              )}
            </div>
          </div>


          
          <div className='side'>
          <div>모임 상세 내용</div>
            <div className='side-box'>
              <div>{}</div>
              <div>{}</div>
              <div>{}</div>
            </div>
          </div>
        </div>
  );
}

export default Home;