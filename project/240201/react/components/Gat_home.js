import React, { useState, useEffect, useRef } from 'react';
import Navi from './Navi';
import Foot from './Foot';
import $ from 'jquery';
import '../css/gat_home.css';

const Gat_home = () => {
    return (
        <div className='gh_container'>
            <Navi />
            <div className='gh_content_box'>
                <div className='gh_search_area'>
                    <input className='gh_search_input'></input>
                    <button className='gh_search_bt1'>검색</button>
                </div>
                <div className='gh_content_area'>
                    <div className='gh_res_area'>
                        <div className='gh_item_area'>
                            <div className='gh_res_item'>1</div>
                            <div className='gh_res_item'>2</div>
                            <div className='gh_res_item'>3</div>
                            <div className='gh_res_item'>4</div>
                            <div className='gh_res_item'>5</div>
                            <div className='gh_res_item'>6</div>
                        </div>
                        <div>
                            <button className='gh_search_bt2'>더보기</button>
                        </div>
                    </div>
                    <div className='gh_side_bar'>
                        사이드 바
                    </div>
                </div>
            </div>
            <Foot />
        </div>
    );
}

export default Gat_home;