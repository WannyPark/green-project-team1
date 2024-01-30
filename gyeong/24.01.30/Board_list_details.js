import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import '../css/board_list_details.css';

import Button from "react-bootstrap/Button";
import $ from 'jquery';
import axios from "axios";
import AOS from "aos";

function formatDate(rawDate) {
  const date = new Date(rawDate);
  const options = { year: 'numeric', month: '2-digit', day: '2-digit'};
  return date.toLocaleDateString('ko-KR', options);
}

const Board_list_details = () => {
  useEffect(() => {
      AOS.init({ duration: 2000 });
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [qMem, setQMem] = useState([]);

  // post 방식
    const reqMem = async () => {
    //   const res = await (await axios.post("/api/reqMem", {
    //     id: id
    //   },
    //   )).data;
    //   console.log(res);
    //   setQMem(res);
    // }
      try {
        const response = await axios.post("/api/reqMem", {
            id: id
        });

        console.log(response.data);
        setQMem(response.data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
        alert("오류가 발생했습니다.");
      }
    }

    useEffect(() => {
      reqMem();
    }, [id]); // id가 변경될 때마다 useEffect가 실행되도록 설정

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState("");
    const [editedContent, setEditedContent] = useState("");

    const handleEditClick = () => {
      setIsEditing(true);
      setEditedTitle(qMem.title);
      setEditedContent(qMem.content);
    };
  
    const handleSaveClick = () => {
      // 여기에서 수정된 내용을 서버에 저장하거나 처리하는 로직을 추가
///////////////////////////////////////////////////////////////////////////
      // 저장 후
      setIsEditing(false);
    };

    // 삭제 처리
    const handleDeleteClick = async () => {
      try {
        // 서버에 삭제 요청을 보냄
        await axios.delete(`/api/deleteMem/${id}`);
  
        // 삭제가 성공하면 현재 보여지고 있는 내용을 지움
        setQMem({
          id: '',
          date: '',
          hit: 0,
          title: '',
          content: '',
        });
      } catch (error) {
        console.error('Error deleting data:', error);
        alert('삭제 중 오류가 발생했습니다.');
      }
    };

  return (
    // <div className='list_details1' data-aos="fade-right">
    //   <table className="list_details2">
    //     <tbody>
    //       <tr>
    //         <td className='li_box1'>게시글 아이디: </td>
    //         <td className='list_details_id'>{id}</td>
    //         <td className='li_box2'>작성일: </td>
    //         <td className='list_details_date'>{qMem[0].date}</td>
    //         <td className='li_box3'>조회수: </td>
    //         <td className='list_details_hit'>{qMem[0].hit}</td>
    //         <td className='li_box4'>
    //           <img src='../images/login_logo.png'></img>
    //         </td>
    //       </tr>
    //       <tr>
    //         <td className='li_box5'>제목: </td>
    //       </tr>
    //       <tr>
    //         <td className='li_box6'>내용: </td>
    //       </tr>
    //     </tbody>
    //   </table>
    //   <div className='list_details3' >{qMem[0].title}</div>
    //   <div className='list_details4'>{qMem[0].content}</div>
    //   <Button className='list'>목록보기</Button>
    //   <Button className='list'>수정</Button>
    //   <Button className='list'>삭제</Button>
    // </div>
    <div className='list_details1' data-aos="fade-right">
      <table className="list_details2">
        <tbody>
          <tr>
            <td className='li_box1'>게시글 아이디: </td>
            <td className='list_details_id'>{id}</td>
            <td className='li_box2'>작성일: </td>
            <td className='list_details_date'>{formatDate(qMem.date)}</td>
            <td className='li_box3'>조회수: </td>
            <td className='list_details_hit'>{qMem.hit}</td>
            <td className='li_box4'>
              <img src='../images/login_logo.png' alt="login_logo"></img>
            </td>
          </tr>
          <tr>
            <td className='li_box5'>제목: </td>
          </tr>
          <tr>
            <td className='li_box6'>내용: </td>
          </tr>
        </tbody>
      </table>
      <td>
        {isEditing ? (
          <input className='title_modify' type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
          ) : (
          <div className='list_details3'>{qMem.title}</div>
          )}
      </td>
      <td>
        {isEditing ? (
        <textarea className='content_modify' value={editedContent} onChange={(e) => setEditedContent(e.target.value)}/>
        ) : (
        <div className='list_details4'>{qMem.content}</div>
        )}
        </td>
        <Button className='list' onClick={handleSaveClick}>
          {isEditing ? '저장' : '목록보기'}
        </Button>
        {!isEditing && (
        <>
        <Button className='list' onClick={handleEditClick}>수정</Button>
        <Button className='list' onClick={handleDeleteClick}>삭제</Button>
        </>
        )}
    </div>
  );
};

  export default Board_list_details;