import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const NavBar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [newPassword, setPassword] = useState("");

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/sign-in");
  };
  const changePassword = (e) => {
    e.preventDefault();
    const isUser = JSON.parse(localStorage.getItem("auth"));
    // const password = isUser.password;
    isUser.password = newPassword;
    localStorage.setItem('auth', JSON.stringify(isUser));
    setShow(true);
  };
  const handleClose = () => setShow(false);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary " bg="primary">
        <Container>
          <Navbar.Brand>Mock App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="user">
                Users
              </Nav.Link>
              <Nav.Link as={Link} to="posts">
                Posts
              </Nav.Link>
              <Nav.Link as={Link} to="products">
                Products
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              {/* Use ml-auto class to push Profile to the right */}
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                <NavDropdown.Item onClick={changePassword}>
                  Change Password
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>{password}</h4> */}
          <div className="mb-3">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NavBar;
