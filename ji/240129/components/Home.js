import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Navi from './Navi';
import axios from 'axios';
import qs from 'qs';
import $, { param } from 'jquery';
import '../css/home.css';

function Home() {
  
	useEffect(() => {
		AOS.init({ duration: 2000 });
	})
  
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const clickEv = () => {
    if ($(".Search-input").val().length < 2) {
      alert("검색 키워드를 2자 이상 작성해주세요.");
      return false;
    }
    $(".searchArea").animate({ marginTop: "10px" }, 1000, function () {});
    $(".aos").css("visibility", "visible").hide().fadeIn(1500);
    getGat();
  };

  async function getGat() {
    const res = await (await axios.get("/api/getGat", {
      params:{
        search: $(".Search-input").val(),
      },
      paramsSerializer: params => {
        return qs.stringify(params, {arrayFormat:'brackets'})
      }
    }).data);
    console.log(res);
    setSearchInput(res);
  }

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
          <div className='searchArea' data-aos="zoom-in">
            <div className='logo' onClick={click_logo}><h1>Dog's Life</h1></div>
            <div className='Search'>
              <input
                className="Search-input"
                type='text'
                placeholder='주제별, 지역별 인기 모임을 검색해보세요~'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={keyPress}
              />
              <button className="submit-button"  onClick={clickEv}>검 색</button>
            </div>
            <div className='aos'>
              <div className='h_item'>
                <div className='h_item_pic'>pic</div>
                <div className='h_item_title'>title</div>
                <div className='h_item_desc'>desc</div>
              </div>
              <div className='h_item'>
                <div className='h_item_pic'>pic</div>
                <div className='h_item_title'>title</div>
                <div className='h_item_desc'>desc</div>
              </div>
              <div className='h_item'>
                <div className='h_item_pic'>pic</div>
                <div className='h_item_title'>title</div>
                <div className='h_item_desc'>desc</div>
              </div>
              <div className='h_item'>
                <div className='h_item_pic'>pic</div>
                <div className='h_item_title'>title</div>
                <div className='h_item_desc'>desc</div>
              </div>
              <div className='h_item'>
                <div className='h_item_pic'>pic</div>
                <div className='h_item_title'>title</div>
                <div className='h_item_desc'>desc</div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Home;
