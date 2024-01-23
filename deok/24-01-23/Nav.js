import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (

    <div className="Navigation">
	<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">logo name</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">ㅁㅁㅁ</Nav.Link>
            <Nav.Link href="#pricing">ㅊㅊㅊ</Nav.Link>
            <NavDropdown title="게시판" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">게시판1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                게시판2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">게시판3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/qwer">회원가입</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              로그인
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navigation;