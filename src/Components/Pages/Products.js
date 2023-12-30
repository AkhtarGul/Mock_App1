import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";


const Products = () => {
    const url = "https://dummyjson.com/products";
    const [data, setData] = useState([]);
    const navigate = useNavigate(); 
    // Function to collect data
    const fetchInfo = async () => {
      const response = await fetch(url).then((response) => response.json());
      // update the state
      setData(response.products);
    };
  
    useEffect(() => {
      fetchInfo();
    }, []);

    const View = (id) =>{
      navigate(`${id}`);
    }

  return (
    <Row xs={1} md={2} className="g-4 mt-3 m-4 gap-3 justify-content-center">
      {data.map((_, idx) => (
        <Col key={idx} className='col-md-3 add-border'>
          <Card className='border-none'>
            <Card.Img variant="top" src={_.thumbnail} className='w-25'/>
            <Card.Body>
              <Card.Title>{_.title}</Card.Title>
              <Card.Text>
                {_.description}
              </Card.Text>

              <Badge bg="primary" className='me-2'>In Stock: {_.stock}</Badge>
              <Badge bg="success" className='me-2'>Price: {_.price}</Badge>
              <Badge bg="info" className='pointer' onClick={() => View(_.id)}>View Details</Badge>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Products;

//