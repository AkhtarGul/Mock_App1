import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from "react";

const User = () => {
  const url = "https://dummyjson.com/users";
  const [data, setData] = useState([]);
  // Function to collect data
  const fetchInfo = async () => {
    const response = await fetch(url).then((response) => response.json());
    // update the state
    setData(response.users);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <Table striped bordered hover className="mt-4">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({id,firstName,lastName,email}) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default User;
