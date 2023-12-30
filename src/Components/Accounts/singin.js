import React, {useState} from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link ,useNavigate} from "react-router-dom";
const SignIn = () => {
    const navigate = useNavigate();
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const postData = (event) => {    
        event.preventDefault();       
        const isUser = JSON.parse(localStorage.getItem('auth'));
        if(!isUser){
          alert('User not Exist')
        }else 
        {
          if(isUser.email === email && isUser.password === password) {
            navigate('/dashboard');
            // alert('dashboard')
        }
        else{
            alert('User email or password may be wrong!')
        } 
        }
     
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
                      Sign In
                    </h2>
                    <div className="mb-3">
                      <Form>  
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
                          controlId="formBasicCheckbox"
                        ></Form.Group>
                        <div className="d-grid">
                          <Button variant="primary" type="submit" onClick={postData}>
                            Login
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Not registered yes??{" "}
                          <span className="text-primary fw-bold">
                        <Link to="/">Sign Up</Link>
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
}

export default SignIn;