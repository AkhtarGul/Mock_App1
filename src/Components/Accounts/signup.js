import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link ,useNavigate} from "react-router-dom";
import React,{useState} from "react";
import Alert from 'react-bootstrap/Alert';

const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");

    
  const postData = (event) => {    
    event.preventDefault();
    const auth = {
       email,
       password
    }
    localStorage.setItem('auth', JSON.stringify(auth));
    if(password == confirmPassword) {
        navigate('/sign-in');
    }
    else{
        alert('Password not  matched')
    }
        console.log(email)  
        console.log(password)  
        console.log(confirmPassword)  
    }
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={4} lg={4} xs={12}>
            <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Sign Up
                  </h2>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit" onClick={postData}>
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{" "}
                        <span className="text-primary fw-bold">
                        <Link to="/sign-in">Sign In</Link>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
