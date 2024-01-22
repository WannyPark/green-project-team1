import './App.css';
import Navigation from './Nav';
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';
import $ from 'jquery';
import 'jquery-easing';


function App() {
	useEffect(() => {
		AOS.init();
	})

	function clickEv() {
		$(".logo").animate({ marginTop: "10px" },1000, function () {
		})
		$(".aos").css("visibility", "visible").hide().slideDown(1000);
		
	}

	return (
		
	<div className="App">
		<Navigation/>
	<div className='all'>
		<div className='logo' > <h1>Logo name</h1></div>
		<div className='Search'>
	  		<input className="Search-input" type='text' placeholder='검색어를 입력하세요' />
	  		<button className="submit-button" onClick={clickEv}>검 색</button>
		</div>
			<div className='aos' data-aos="fade-up" >
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
			</div>
	</div>
  	</div>
  );
}

export default App;
