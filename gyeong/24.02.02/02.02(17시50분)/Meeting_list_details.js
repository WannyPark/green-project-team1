import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import '../css/meeting_list_details.css';
import Navi from './Navi';

import Button from "react-bootstrap/Button";
import { Input } from 'reactstrap';
import $ from 'jquery';
import axios from "axios";
import AOS from "aos";

function formatDate(rawDate) {
  const date = new Date(rawDate);
  const options = { year: 'numeric', month: '2-digit', day: '2-digit'};
  return date.toLocaleDateString('ko-KR', options);
}

const Meeting = () => {
  useEffect(() => {
      AOS.init({ duration: 2000 });
  });


  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");
  
  const handleSwitchClick1 = () => {
    $(".mswitchBtn1").css("visibility", "hidden");
    $(".mswitchBtn2").css("visibility", "visible");

    $(".mlist_details5").css("visibility", "hidden");
    $(".mlist_details6").css("visibility", "visible");
  };
  const handleSwitchClick2 = () => {
    $(".mswitchBtn1").css("visibility", "visible");
    $(".mswitchBtn2").css("visibility", "hidden");

    $(".mlist_details5").css("visibility", "visible");
    $(".mlist_details6").css("visibility", "hidden");
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [qMem, setQMem] = useState([]);

  const reqMem = async () => {
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

  //수정
  const handleEditClick = () => {
    $(".mchangeBtn").css("visibility", "visible");
    setIsEditing(true);
    setEditedTitle(qMem.title);
    setEditedContent(qMem.content);
  };
  //(수정)저장
  const handleSaveClick = async  () => {
    const data = {
      id:id,
      title:$(".mtitle_modify").val(),
      content:$(".mcontent_modify").val(),
    }
    try {
      // 수정된 제목과 내용을 서버에 전송
        await axios.post("/api/updateMem", data);
      
      // 성공적으로 저장되면 편집 모드를 비활성화하고 수정된 내용을 다시 불러옴
      setIsEditing(false);
      // setQMem({
      //   title: $(".title_modify").val(),
      //   content: $(".content_modify").val(),
      // });
      reqMem();
      $(".mchangeBtn").css("visibility", "hidden");
    } catch (error) {
      console.error('Error updating data:', error);
      alert('수정 중 오류가 발생했습니다.');
    }
  };

  // 삭제 처리
  const handleDeleteClick = async () => {
    try {
      // 서버에 삭제 요청을 보냄
      await axios.delete("/api/deleteMem", {
        data: {id}
      });
  
      // 삭제가 성공하면 현재 보여지고 있는 내용을 지움
      setQMem({
        id: '',
        date: '',
        title: '',
        content: '',
        comments: '',
        member: ''
      });
      window.location.href = "#";
      // history.push("#");
    } catch (error) {
      console.error('Error deleting data:', error);
      alert('삭제 중 오류가 발생했습니다.');
    }
  };

  // 참여하기
  const handleJoinClick = () => {
    // qMem의 member 배열
    const updatedMember = [...qMem.member];

    // qMem.id가 이미 member 배열에 포함되어 있는지 확인
    const isAlreadyJoined = updatedMember.includes(qMem.id);

    if (!isAlreadyJoined) {
    updatedMember.push(qMem.id);

    setQMem((prevQMem) => ({
      ...prevQMem,
      member: updatedMember,
    }));
  };
  // $(".mBtn1").css("visibility", "hidden");
};

  return (
    <div><Navi />
      <div className='mlist_details1' data-aos="fade-right">
        <table className="mlist_details2">
          <tbody>
            <tr>
              <td className='mli_box1'>게시글 아이디 </td>
              <td className='mlist_details_id'>{qMem.id}</td>
              <td className='mli_box2'>작 성 일 </td>
              <td className='mlist_details_date'>{formatDate(qMem.date)}</td>
              <td className='mli_box3'>
                <img src='../images/login_logo.png' alt="login_logo"></img>
              </td>
            </tr>
            <tr>
              <td className='mli_box4'>모 임 명 </td>
            </tr>
            <tr>
              <td className='mli_box5'>모 임 소 개      및               안 내 사 항 </td>
            </tr>

            <Button className='mswitchBtn1' onClick={handleSwitchClick1}>멤버 보기</Button>
            <Button className='mswitchBtn2' onClick={handleSwitchClick2}>일정 보기</Button>
            <Button className='mchangeBtn' onClick={handleSaveClick}>
            {isEditing ? '저장' : '목록보기'}
          </Button>
            {!isEditing && (
            <>
            <tr className='mBtn'>
            <Button href='#' className='mBtn1' onClick={handleJoinClick}>참여하기</Button>
            <Button href='#' className='mBtn2'>목록보기</Button>
            <Button className='mBtn3' onClick={handleEditClick}>수정</Button>
            <Button className='mBtn4' onClick={handleDeleteClick}>삭제</Button>
            </tr>
            </>
            )}
            
          </tbody>
        </table>
          {isEditing ? (
            <input className='mtitle_modify' type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
            ) : (
            <div className='mlist_details3'>{qMem.title}</div>
            )}
          {isEditing ? (
          <input className='mcontent_modify' value={editedContent} onChange={(e) => setEditedContent(e.target.value)}/>
          ) : (
          <div className='mlist_details4'>{qMem.content}"모임 일정, 주소, 공지사항 등"</div>
          )}
          <div className='mlist_details5'>
            <ul>
              <li><a href='#'>{qMem.schedule}</a></li>
              <li><a href='#'>일정2</a></li>
              <li><a href='#'>일정3</a></li>
            </ul>
            <a href='#' className='schedule'>일정 생성</a>
          </div>
          <div className='mlist_details6'>
          <ul>
              <li>{qMem.member}</li>
              <li>멤버2</li>
              <li>멤버3</li>
            </ul>
          </div>
          <div className='mlist_details7'>
            <div className='mlist_details8'>
              <ul>
                <li>{qMem.comments}</li>
              </ul>
              <ul>
                <li>댓글2
                  <ol type='I'>
                    <li>댓글2.1
                      <ol type='i'>
                        <li>댓글2.1-1</li>
                      </ol>
                    </li>
                  </ol>
                </li>
              </ul>
            </div>
            <Input />
            <Button>댓글 달기</Button>
          </div>
      </div>
    </div>
  );
};

  export default Meeting;