import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

const ProductViewDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const url = `https://dummyjson.com/products/${id}`;

  // Function to collect data
  const fetchInfo = async () => {
    const response = await fetch(url).then((response) => response.json());
    // update the state
    setData(response);
  };

 // eslint-disable-next-line react-hooks/exhaustive-deps
 useEffect(() => {
    fetchInfo();
  }, []); // No dependencies in the array

  return (
    <div className="container">
         <Button variant="secondary btn-sm mt-2" onClick={() => navigate(-1)}>
                            Go Back
                          </Button>      
      <div>
        <div className="title">
          <h1>{data.title}</h1>
        </div>
        <div className="flex-container">
          {data.thumbnail && (
            <img src={data.thumbnail} alt="" className="cocktail-img" />
          )}
          <div className="cocktail-infos">
            <div className="row">
              <h3 className="label">Name: </h3>
              <p className="text">{data.title}</p>
            </div>
            <div className="row">
              <h3 className="label">Category: </h3>
              <p className="text">{data.category}</p>
            </div>
            <div className="row">
              <h3 className="label">Info: </h3>
              <p className="text">{data.description}</p>
            </div>
            <div className="row">
              <h3 className="label">Price: </h3>
              <p className="text">{data.price}</p>
            </div>
            <div className="row">
              <h3 className="label">Rating: </h3>
              <p className="text">{data.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductViewDetails;
