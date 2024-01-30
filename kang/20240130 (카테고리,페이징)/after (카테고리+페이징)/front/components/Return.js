import { useEffect, useState } from 'react';
import "aos/dist/aos.css";
import Navi from './Navi';
import '../css/home.css';
import '../css/board.css';
import axios from 'axios';
import $ from 'jquery';
import qs from 'qs';

const App=() =>{

    const [list, setList] = useState([]);
    const [search, setSearchList] = useState([]);
    const [inputSearch , setInputSearch] = useState("");
    const [hit, setHit] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentSearchPage, setCurrentSearchPage] = useState(1);
    const pageSize = 30; // 한 페이지당 표시할 게시글 수
    const [catem,setCateList]= useState([]);
    const [CurrentCatePage,setCorrentCatePage] = useState(1);
    const [inputCate,setInputCate] = useState("");
    
    // 전체 리스트를 가져오는 함수
    const getList = async (page) => {
      try {
        const res = await axios.get(`boardCheck?page=${page}&pageSize=${pageSize}`);
        setList(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    // 검색 결과를 가져오는 함수
    const getSearchList = async (page) => {
      const selec = $("#selec").val();
      const searchVal = $("#searchVal").val();
  
      try {
        const res = await axios.get(`/boardSearch?page=${page}&pageSize=${pageSize}&selec=${selec}&searchVal=${searchVal}`);
        setSearchList(res.data);
  
        // 검색 결과를 가져왔을 때 currentPage 상태를 업데이트
        setCurrentSearchPage(page);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    const getHit = async () => {
      try {
        const res = await axios.get("getHit");
        setHit(res.data);
      } catch (error) {
        console.error("데이터를 불러오는 중 에러 발생:", error);
      }
    }
  //카테고리 전용 함수들
  const getCate = async (page,catemenu) => {
      try {
        const data = {
          page : page,
          pageSize : pageSize,
          catemenu : catemenu
        }
        const res = await axios.post('/boardCate',data);
        setCateList(res.data);
        // 검색 결과를 가져왔을 때 currentPage 상태를 업데이트
        setCorrentCatePage(page);
        console.log(res.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
  
  }
   //카테고리 전체보기(0)클릭시 카테고리 값을 false 로 바꿈으로 list와 hot 출력함 
  const handleCateClick = async (page,catemenu) => {
    if (catemenu == 0 ) {
      setInputCate(false);
   
      // await getList(1);
      // await getHit();
      console.log(catemenu)
    } else {
      setCorrentCatePage(1);
      setInputCate(catemenu);
      getCate(page,catemenu);
      console.log(catemenu)
    }
  }
  
  // 전체 게시판 가져옴
    useEffect(() => {
      getList(currentPage);
      getHit();
    }, [currentPage]);
  
    // 클릭 시 getSearchList()값 가져오는 함수
    const handleSearchClick = () => {
      setCurrentSearchPage(1); // 검색할 때 currentPage를 1로 초기화하여 첫 번째 페이지부터 검색 결과를 보여줌
      getSearchList(1); //1번 페이지 리스트가꼬옴
      setInputSearch($("#searchVal").val()); // 사용자가 입력한 값을 변수에 넣었음
    }
  
    //  검색페이지를 currentSearchPage로 셋팅해줌
  
    useEffect(() =>  {
      getSearchList(currentSearchPage);
    }, [currentSearchPage])

    return (

    );
    
}

export default App;