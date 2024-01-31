import './App.css';

function App() {
  return (
    <div>
      <div className='meeting'>
        <div className="meeting-table">
        <h2 className='aa'>모임 만들기</h2>
          <div>
            <div className='meeting-title'>모임명  
              <input className='mn_title' type='text'></input>
            </div>
          </div>
            <div>
              <div className='meeting-content'>모임 내용 
                <div>
                  <textarea className='mn_textarea'></textarea>
                </div>
              </div>
            </div>
            <div>이미지</div>
            <div className='mn_btn'>
            <button className='mn_btn1'>만들기</button>
            <button className='mn_btn1'>뒤로가기</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
