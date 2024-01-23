import './App.css';
import Navigation from './Nav';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import $, { param } from 'jquery';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const getH = async () => {
    try {
      console.log("Search Input:", searchInput); // 검색어 출력
      const response = await axios.get("/home", {
        params: { title: searchInput },
      });
      console.log("Server Response:", response.data);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const clickEv = () => {
    getH();
    $(".logo").animate({ marginTop: "10px" }, 1000, function () {});
    $(".aos").css("visibility", "visible").hide().slideDown(1000);
  };

  const keyPress = (a) =>{
	if (a.key === 'Enter'){
		clickEv();
	}
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Navigation />
      <div className='all'>
        <div className='logo'> <h1>Logo name</h1></div>
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

export default App;
