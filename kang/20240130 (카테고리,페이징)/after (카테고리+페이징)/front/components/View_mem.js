import React, { useEffect, useState } from "react";
import Navi from './Navi';
import '../css/view_mem.css';
import axios from "axios";
import qs from 'qs';



const ViewMem = () => {
    // 배열을 바꿔줌 setList 를 주면 값을 변경가능
    // final
    const [list, setList] = useState([]);

    const getMem = async () => {
        try {
            const res = await axios.get("/api/search", {
                params: {
                    id: "THREE",
                },
                paramsSerializer: params => {
                    return qs.stringify(params, { arrayFormat: 'brackets' })
                }
            });
            setList(res.data);
            console.log(res.data);
        } catch (error) {
            console.error("데이타를 불러오는 중 에러 발생:", error);
        }
    }

    useEffect(() => {
        getMem();
    }, []);

    return (
        <div className="view_mem">
            <Navi />
            <div className="co_container">
                <div className="vm_container">
                    <div className="dt_box">
                        <span className="dt_name">아이디</span>
                        <span className="db_data">{list.id}</span>
                    </div>
                    <div className="dt_box">
                        <span className="dt_name">이메일</span>
                        <span className="db_data">{list.email}</span>
                    </div>
                    <div className="dt_box">
                        <span className="dt_name">이름</span>
                        <span className="db_data">{list.name}</span>
                    </div>
                    <div className="dt_box">
                        <span className="dt_name">생년월일</span>
                        <span className="db_data">{list.birth}</span>
                    </div>
                    <div className="dt_box">
                        <span className="dt_name">주소</span>
                        <span className="db_data">{list.addr}</span>
                    </div>
                    <div className="dt_box">
                        <span className="dt_name">상세주소</span>
                        <span className="db_data">{list.addr2}</span>
                    </div>
                    <div className="vm_btBox">
                        <p className="vm_homeLink">홈으로</p>
                        <p className="vm_changePwLink">정보 수정</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
// DB MAPPER DAO SERVICE COTROLLER REACT 
export default ViewMem;