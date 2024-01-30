import { useEffect, useState } from 'react';
import "aos/dist/aos.css";
import Navi from './Navi';
import '../css/home.css';
import '../css/board.css';
import axios from 'axios';
import $ from 'jquery';

const App = () => {
  const [list, setList] = useState([]);
  const [search, setSearchList] = useState([]);
  const [inputSearch , setInputSearch] = useState("");
  const [hit, setHit] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSearchPage, setCurrentSearchPage] = useState(1);
  const pageSize = 30; // 한 페이지당 표시할 게시글 수

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
    <div className="view_mem">
      <Navi />
      <div>
        {/* 검색 폼 */}
        <form>
          <select className='selec' id='selec'>
            <option value="boardWriter">작성자</option>
            <option value="boardTitle">글제목</option>
          </select>
          <input type='text' placeholder='검색' id='searchVal' name='searchVal' className='buttonSearch'></input> &nbsp;
          <input type='button' value={"검색 하기"} className='buttonInput' onClick={handleSearchClick}></input>
          <input type='button' value={"글작성"} className='buttonWrite'></input>
        </form>
      </div>
      <table className='tablehead'>
        <thead>
          <tr>
            <th className='boardNum'>글번호</th>
            <th className='boardTitle'>글제목</th>
            <th className='boardWriter'>작성자</th>
            <th className='boardDate'>작성일</th>
            <th className='boardHit'>조회수</th>
          </tr>
        </thead>
        <tbody>
          {hit.map(hit2 => (
            /* 인기글 표시 */
            <tr key={hit2.boardNum} className='hit'>
              <td> <div className='hot'>
                HOT
              </div> </td>
              <td><a href='#'>{hit2.boardTitle}</a></td>
              <td>{hit2.boardWriter}</td>
              <td>{hit2.boardDate}</td>
              <td>{hit2.boardHit}</td>
            </tr>
          ))}
          {/* 검색된 내용 출력 search.length가 0인 경우 list.map 출력 */}
          {search.length > 0 ? (
            search.map(result => (
              <tr key={result.boardNum}>
                <td>{result.boardNum}</td>
                <td><a href='#'>{result.boardTitle}</a></td>
                <td>{result.boardWriter}</td>
                <td>{result.boardDate}</td>
                <td>{result.boardHit}</td>
              </tr>
            ))
          ) : (
            // 검색된 내용이 없으면 전체 리스트 출력
            list.map(board => (
              /* 게시글 목록 표시 */
              <tr key={board.boardNum}>
                <td>{board.boardNum}</td>
                <td><a href='#'>{board.boardTitle}</a></td>
                <td>{board.boardWriter}</td>
                <td>{board.boardDate}</td>
                <td>{board.boardHit}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {/* 페이징 */}
      <div className="pagination">
        <button 
          onClick={() => inputSearch.length > 0 ? setCurrentSearchPage(currentSearchPage - 1) : setCurrentPage(currentPage - 1)}
          disabled={inputSearch.length > 0 ?  currentSearchPage === 1:currentPage  === 1 }>
          이전 페이지
        </button>
        <span> &nbsp; 현재 페이지: {inputSearch.length > 0 ? currentSearchPage : currentPage} &nbsp;</span>
        <button
          onClick={() => inputSearch.length > 0 ? setCurrentSearchPage(currentSearchPage + 1) : setCurrentPage(currentPage + 1)}
          disabled={inputSearch.length > 0 ? (search.length < pageSize) : (list.length < pageSize)}
        >
          다음 페이지
        </button>
      </div>
    </div>
  );
}

export default App;
