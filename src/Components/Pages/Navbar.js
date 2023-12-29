import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link ,useNavigate,} from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {   
    const navigate = useNavigate();
    const logout = (e) =>{
        e.preventDefault();
        localStorage.clear();
        navigate('/sign-in');
    }
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary" bg="primary">
      <Container>
        <Navbar.Brand as={Link} to="/dashboard">Mock App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="user">Users</Nav.Link>
            <Nav.Link as={Link} to="post">Posts</Nav.Link>
            <Nav.Link as={Link} to="products">Products</Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>  
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>   
   </div>
  );
}

export default NavBar;
