import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Navi from './Navi';
import Foot from './Foot';
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

  const clickEv = async () => {
    if ($(".Search-input").val().length < 2) {
      alert("검색 키워드를 2자 이상 작성해주세요.");
      return false;
    }
    const res = await (await axios.get("/api/getGat", {
      params:{
        search: $(".Search-input").val(),
      },
      paramsSerializer: params => {
        return qs.stringify(params, {arrayFormat:'brackets'})
      }
    })).data;
    if (res[0] == undefined) {
      alert("해당 검색어와 매칭되는 모임이 존재하지 않습니다.");
      return false;
    }
    $(".searchArea").animate({ marginTop: "10px" }, 1000, function () {});
    $(".aos").css("visibility", "visible").hide().fadeIn(1000);
    $("#item1 .h_item_pic").text(res[0].GAT_IMG_NAME1);
    $("#item1 .h_item_title").text(res[0].GAT_TITLE);
    $("#item1 .h_item_desc").text(res[0].GAT_DESC);
    $("#item2 .h_item_pic").text(res[1].GAT_IMG_NAME1);
    $("#item2 .h_item_title").text(res[1].GAT_TITLE);
    $("#item2 .h_item_desc").text(res[1].GAT_DESC);
    $("#item3 .h_item_pic").text(res[2].GAT_IMG_NAME1);
    $("#item3 .h_item_title").text(res[2].GAT_TITLE);
    $("#item3 .h_item_desc").text(res[2].GAT_DESC);
    $("#item4 .h_item_pic").text(res[3].GAT_IMG_NAME1);
    $("#item4 .h_item_title").text(res[3].GAT_TITLE);
    $("#item4 .h_item_desc").text(res[3].GAT_DESC);
    $("#item5 .h_item_pic").text(res[4].GAT_IMG_NAME1);
    $("#item5 .h_item_title").text(res[4].GAT_TITLE);
    $("#item5 .h_item_desc").text(res[4].GAT_DESC);
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
              <div className='h_item' id='item1'>
                <div className='h_item_pic'>pic</div>
                <div className='h_item_title'>title</div>
                <div className='h_item_desc'>desc</div>
              </div>
              <div className='h_item' id='item2'>
                <div className='h_item_pic'>pic</div>
                <div className='h_item_title'>title</div>
                <div className='h_item_desc'>desc</div>
              </div>
              <div className='h_item' id='item3'>
                <div className='h_item_pic'>pic</div>
                <div className='h_item_title'>title</div>
                <div className='h_item_desc'>desc</div>
              </div>
              <div className='h_item' id='item4'>
                <div className='h_item_pic'>pic</div>
                <div className='h_item_title'>title</div>
                <div className='h_item_desc'>desc</div>
              </div>
              <div className='h_item' id='item5'>
                <div className='h_item_pic'>pic</div>
                <div className='h_item_title'>title</div>
                <div className='h_item_desc'>desc</div>
              </div>
            </div>
          </div>
          <Foot />
        </div>
  );
}

export default Home;
