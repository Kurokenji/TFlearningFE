import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import AuthUser from './AuthUser';

function NavBar() {
  // const {getToken} = AuthUser();
  // if(!getToken()){
  //   return 
  // }
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">TF-Learning</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            
              <Nav.Link href="/login">Đăng Nhập</Nav.Link>
              <Nav.Link href="/register">Đăng Ký</Nav.Link>
              {/* <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Information</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Feedback
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/logout">
                  Logout
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container">
        <Routes>
          <Route path="*" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
    </div>
  );
}

export default NavBar;
