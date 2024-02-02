import React, { useEffect ,useState } from 'react'
import { useLocation } from 'react-router-dom';

import Navi from './Navi'
import '../css/Gat_plan.css'
import axios from 'axios';
import qs from 'qs';
import $ from 'jquery';
import '../css/login.css';  // 해당 CSS 파일 import


// 쿼리스트링 추출
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function Gat_plan() {
  
  const [list, setList] = useState([]);

  const location = useLocation(); // React Router의 useLocation 훅을 사용하여 현재 페이지의 location 정보를 가져옴
  const getgplist = async () => {
  
 
  const params = new URLSearchParams(location.search)
  let name = params.get("gat_plan_id")


  console.log(name)
    const data = {
      gat_plan_id :name
    }

  // const res = await (await axios.post("/api/got_plan",data
  // )).data;
  // setList(res);
  // console.log(res[0]);
  await axios.post("/api/got_plan",data)
  .then((res) => {
    setList(res.data);
    console.log(res.data[0]);
    $(".gpplan2").text(res.data[0].gat_plan_title);  //제이쿼리로 넣음
    $(".gpleader").text(res.data[0].gat_plan_leader);  //제이쿼리로 넣음
    $(".gpdate").text(res.data[0].gat_plan_date);  //제이쿼리로 넣음
    $(".gpaddr").text(res.data[0].gat_plan_addr);  //제이쿼리로 넣음
    $(".gptitle").text(res.data[0].gat_plan_title);  //제이쿼리로 넣음
    $(".gpdesc").text(res.data[0].gat_plan_desc);  //제이쿼리로 넣음
  })

}

useEffect(() => {
  getgplist();
}, []);




  return  (
    <div>
      <Navi />
      <div className='gpfull'>
        <div>
          <table className='gptable'>
            <thead>
              <tr>
                <td className='gpplan' colSpan={3}>
                  <h1 className='gpplan2'>{} 플랜 보기</h1>
                </td>
              </tr>
              <tr>
                <td>주최자</td>
                <td>날짜</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='gpleader'>{}</td>
                <td className='gpdate'>{}</td>
              </tr>
              <tr>
                <td colSpan={3}>주소</td>
              </tr>
              <tr>
                <td className="gpaddr" colSpan={3}>{}</td>
              </tr>
              <tr>
                <td colSpan={3}>제목</td>
              </tr>
              <tr>
                <td colSpan={3} className='gptitle'> {} </td>
              </tr>
              <tr>
                <td colSpan={3}>내용</td>
              </tr>
              <tr>
                <td colSpan={3} className='gpdesc'> {} </td>
              </tr>
            </tbody>
          </table>
          <div className='gpmove'>
            <a href='#'>뒤로 가기</a>&nbsp;
            <a href='#'>홈으로 가기</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gat_plan;