import React, { useEffect, useState  } from "react";
import Navi from './Navi';
import axios from 'axios';
import '../css/view_mem.css'

const View_mem = () => {
    
    const [mem, setMem] = useState([]);

    async function getMem() {
        const res = await (await axios.get("/api/view_mem")).data;
        setMem(res);
        console.log(mem);
    }
    
    useEffect(() => {
        getMem();
    },[]);

    return (
        <div className="view_mem">
            <Navi />
            <div className="co_container">
                <div className="vm_container">
                    <div className="dt_box">
                        <span className="dt_name">아이디</span>
                        <span className="db_data">{mem.mem_id}</span>
                    </div>
                    <div className="dt_box">
                        <span className="dt_name">이메일</span>
                        <span className="db_data">{mem.mem_email}</span>
                    </div>
                    <div className="dt_box">
                        <span className="dt_name">이름</span>
                        <span className="db_data">{mem.mem_name}</span>
                    </div>
                    <div className="dt_box">
                        <span className="dt_name">생년월일</span>
                        <span className="db_data">{mem.mem_bir}</span>
                    </div>
                    <div className="dt_box">
                        <span className="dt_name">주소</span>
                        <span className="db_data">{mem.mem_addr1}</span>
                    </div>
                    <div className="dt_box">
                        <span className="dt_name">상세주소</span>
                        <span className="db_data">{mem.mem_addr2}</span>
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

export default View_mem;