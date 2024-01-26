import React, { useEffect, useState  } from "react";
import Navi from './Navi';
import '../css/view_mem.css'

const view_mem = () => {
    return (
        <div className="view_mem">
            <Navi />
            <div className="co_container">
                <div className="vm_container">
                    <div className="dt_box">
                        <span className="dt_name">아이디</span>
                        <span className="db_data">[아이디 데이타]</span>
                    </div>
                    <div className="dt_box">
                        <span className="dt_name">이메일</span>
                        <span className="db_data">[이메일 데이타]</span>
                    </div>
                    <div className="dt_box">
                        <span className="dt_name">이름</span>
                        <span className="db_data">[이름 데이타]</span>
                    </div>
                    <div className="dt_box">
                        <span className="dt_name">생년월일</span>
                        <span className="db_data">[생년월일 데이타]</span>
                    </div>
                    <div className="dt_box">
                        <span className="dt_name">주소</span>
                        <span className="db_data">[주소 데이타]</span>
                    </div>
                    <div className="dt_box">
                        <span className="dt_name">상세주소</span>
                        <span className="db_data">[상세주소 데이타]</span>
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

export default view_mem;