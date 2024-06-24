import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Admin(){
    return(
        <div>
        <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Admin</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            
              {/* <Nav.Link href="/login">Quản lí người dùng</Nav.Link> */}
              <Nav.Link href="/logout">Đăng xuất</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    <div>
        Thống kê trang web...
    </div>
    <div>
        Quản lí người dùng
    </div>
    <div>
        
    </div>
    </div>
        
    )
    
}

export default Admin;