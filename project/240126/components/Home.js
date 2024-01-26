import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Navi from './Navi';
import axios from 'axios';
import $, { param } from 'jquery';
import '../css/home.css';

function Home() {
  
	useEffect(() => {
		AOS.init();
	})
  
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const clickEv = () => {
    if ($(".Search-input").val().length < 2) {
      alert("검색 키워드를 2자 이상 작성해주세요.");
      return false;
    }
    // getH();
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
          <Navi />
          <div className='searchArea'>
            <div className='logo' onClick={click_logo}><h1>Dog's Life</h1></div>
            <div className='Search'>
              <input
                className="Search-input"
                type='text'
                placeholder='검색어를 입력하세요'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={keyPress}
              />
              <button className="submit-button"  onClick={clickEv}>검 색</button>
            </div>
            <div className='aos' data-aos="fade-up">
              {searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                  <div key={index}>
                    <div>{result.title}</div>
                    <div>{result.link}</div>
                  </div>
                ))
              ) : (
                <div>검색 결과가 없습니다.</div>
              )}
            </div>
          </div>
        </div>
  );
}

export default Home;
