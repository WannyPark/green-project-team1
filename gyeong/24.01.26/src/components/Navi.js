import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/nav.css';

function Navi() {
  return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className='nv'>
          <Navbar.Brand href="/">걔모임</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/login">로그인</Nav.Link>
              <Nav.Link href="/sign_up">회원가입</Nav.Link>
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