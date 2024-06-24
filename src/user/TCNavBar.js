import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Home from '../components/Home';
import Quest from './Quest';
import Test from './Test';
import AuthUser from '../components/AuthUser';
import CreateQuest from './CreateQuest';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Me from '../components/Me';
import { NavLink } from 'react-router-dom';
import CreateTest from './CreateTest';

import DoThisExam from '../components/DoThisExam';
import History from '../components/History';



function TCNavBar() {
  // const {getToken} = AuthUser();
  // if(!getToken()){
  //   return 
  // }
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const handleButtonSearchClick = () => {

      console.log(data);
      navigate("do/"+data)
  }
  const handleInputChange = (e) => {
    setData(e.target.value);
  }
  const {token, logout, user} = AuthUser();
  const logoutUser = () => {
    if(token != undefined){
      logout();
    }
  }
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary justify-content-between">
        <Container>
          <Navbar.Brand href="/">TF-Learning</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="/">Trang chủ</Nav.Link> */}
              {/* <Nav.Link href="/quest">Quest</Nav.Link> */}
              <NavDropdown title="Câu hỏi" id="basic-nav-dropdown">
                <NavDropdown.Item href="/quest">Quản lí</NavDropdown.Item>
                <NavDropdown.Item href="quest/create">Tạo mới</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Bài thi" id="basic-nav-dropdown">
                <NavDropdown.Item href="/test">Quản lí</NavDropdown.Item>
                <NavDropdown.Item href="/test/create">Tạo mới</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/history">Lịch sử</Nav.Link>
             
              <NavDropdown title="Tài khoản" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink to={{pathname:"/me/"+user.id}}>
                    {user.name}
                  </NavLink>      
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to={{pathname:"/do/"+user.id}}>
                  Feedback
                  </NavLink>    
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/logout" onClick={logoutUser}>
                  Đăng xuất
                </NavDropdown.Item>
              </NavDropdown>
              <Form inline>
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Nhập ID bài thi"
                      className="mr-sm-2"
                      onChange={handleInputChange}
                    />
                  </Col>
                  <Col xs="auto">
                    <Button onClick={handleButtonSearchClick} type="Làm bài">Submit</Button>
                  </Col>
                </Row>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/quest" element={<Quest/>} />
          <Route path="/quest/create" element={<CreateQuest/>} />
          <Route path='/me/:id' element={<Me/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="/test/create" element={<CreateTest/>} />
          <Route path="/history" element={<History/>} />
          <Route path='/do/:id' element={<DoThisExam/>} />
        </Routes>
      </div>
    </div>
  );
}

export default TCNavBar;
