import { useEffect, useState } from 'react';
import "aos/dist/aos.css";
import Navi from './Navi';
import '../css/home.css';
import '../css/board.css';
import axios from 'axios';

const App = () => {
  const [list, setList] = useState([]);
  const [hit, setHit] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 30; // 한 페이지당 표시할 게시글 수

  const getList = async (page) => {
    try {
      const res = await axios.get(`boardCheck?page=${page}&pageSize=${pageSize}`);
      setList(res.data);
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

  return (
    <div className="view_mem">
      <Navi />
      <div>
        {/* 검색 폼 */}
        <form>
          <select className='selec'>
            <option value="option1">작성자</option>
            <option value="option2">글제목</option>
            <option value="option3">글타이틀</option>
          </select>
          <input type='text' placeholder='검색' className='buttonSearch'></input> &nbsp;
          <input type='submit' value={"검색 하기"} className='buttonInput'></input>
          <input type='submit' value={"글작성"} className='buttonWrite'></input>
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
          {list.map(board => (
            /* 게시글 목록 표시 */
            <tr key={board.boardNum}>
              <td>{board.boardNum}</td>
              <td><a href='#'>{board.boardTitle}</a></td>
              <td>{board.boardWriter}</td>
              <td>{board.boardDate}</td>
              <td>{board.boardHit}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 페이징 처리 */}
      <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          이전 페이지
        </button>
        <span> &nbsp; 현재 페이지 : {currentPage} &nbsp;</span>
             {/* 게시글 수가 29랑 같거나 작은경우 비활성화 */}
 <button onClick={() => setCurrentPage(currentPage + 1 )} disabled={list.length <= 29}>
          다음 페이지
        </button>
        </button>
      </div>
    </div>
  );
}

export default App;
