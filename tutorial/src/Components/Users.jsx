import React from 'react';
import "../App.css";
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const Users = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams(); // This will give you the route parameters
  
  console.warn({ navigate, location, params });

  return (
    <>
      <h1>Users, Hello from there - Dynamic Routing</h1>
      <h5>User-ID: {params.id}</h5>
      <h5>User-NAME: {params.name}</h5>
    </>
  );
};

export default Users;
