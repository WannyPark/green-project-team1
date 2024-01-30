import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/nav.css';
import Session from 'react-session-api';
import axios from 'axios';
import { useEffect } from 'react';
import $ from 'jquery';

function Navi() {

  // function check_login() {
  //   let session = Session.get("id");
  //   console.log(session);
  //   if (session !== undefined) {
  //     $(".loginout").html("로그아웃");
  //     $(".loginout").attr("href","/logout");
  //     $(".signupviewmem").html("회원정보");
  //     $(".signupviewmem").attr("href","/view_mem");
  //   }
  // }

  async function check_login() {
      const res = await (await axios.get("/api/getSession")).data;
      console.log(res);
      if (res !== '') {
        $(".loginout").html("로그아웃");
        $(".loginout").attr("href","/logout");
        $(".signupviewmem").html("회원정보");
        $(".signupviewmem").attr("href","/view_mem");
      }
  }

  useEffect(() => {
    check_login();
  },[])

  return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className='nv'>
          <Navbar.Brand href="/">걔모임</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='loginout' href="/login">로그인</Nav.Link>
              <Nav.Link className='signupviewmem' href="/sign_up">회원가입</Nav.Link>
              <NavDropdown title="게시판" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Gettering</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Dog's Life Tips !</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Navi;