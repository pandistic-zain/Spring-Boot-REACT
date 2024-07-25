import React, { useState, useEffect } from "react";
import "../ComponentsStyle/Edit-AddEmployee.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import EmployeeServices from "../Services/EmployeeServices"; // Adjust the import path as needed

const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: id,
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`Fetching data for employee with id: ${id}`); // Debugging line
        const response = await EmployeeServices.getEmployeeById(id);
        setEmployee(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  const handleBackClick = () => {
    navigate('/');
  };

  const handleUpdateEmployee = (e) => {
    e.preventDefault();
    console.log(`Updating employee with id: ${id}`); // Debugging line
    EmployeeServices.updateEmployee(id, employee)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="button-name">
          <button onClick={handleBackClick}>
            <span className="arrow-back"></span>
          </button>
          <h1>Update Employee</h1>
        </div>
        <form>
          <div className="user-box">
            <input
              type="number"
              name="id"
              required
              value={employee.id}
              disabled
            />
            <label style={{ transform: "translateX(90%) translateY(-50%)" }}>
              ID
            </label>
          </div>
          <div className="user-box">
            <input
              type="text"
              name="name"
              required
              value={employee.name}
              onChange={handleChange}
            />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              id="email"
              name="email"
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              value={employee.email}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="user-box">
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={employee.phone}
              onChange={handleChange}
            />
            <label htmlFor="phone">Phone</label>
          </div>
          <center>
            <Link onClick={handleUpdateEmployee}>
              UPDATE
              <span></span>
            </Link>
          </center>
        </form>
      </div>
    </div>
  );
};

export default UpdateEmployee;
