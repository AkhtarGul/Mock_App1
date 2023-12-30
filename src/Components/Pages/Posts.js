import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from "react";
import logo from './../../logo.svg'
const Posts = () => {
    const url = "https://dummyjson.com/posts";
    const [data, setData] = useState([]);
    // Function to collect data
    const fetchInfo = async () => {
      const response = await fetch(url).then((response) => response.json());
      // update the state
      setData(response.posts);
    };
  
    useEffect(() => {
      fetchInfo();
    }, []);

  return (
    <Row xs={1} md={2} className="g-4 mt-3 m-4 gap-3 justify-content-center">
      {data.map((_, idx) => (
        <Col key={idx} className='col-md-3 add-border'>
          <Card className='border-none'>
            <Card.Img variant="top" src={logo} className='w-25'/>
            <Card.Body>
              <Card.Title>{_.title}</Card.Title>
              <Card.Text>
                {_.body}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Posts;