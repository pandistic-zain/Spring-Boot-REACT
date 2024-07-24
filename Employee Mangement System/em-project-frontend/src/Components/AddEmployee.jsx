import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../ComponentsStyle/Edit-AddEmployee.css";
import EmployeeServices from "../Services/EmployeeServices";
const AddEmployee = () => {
  const [employee, addEmployee] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    addEmployee({ ...employee, [e.target.name]: value });
  };
  const navigate = useNavigate();
  function handleBackClick() {
    navigate("/");
  }
  const handleSaveEmployee = (e) => {
    e.preventDefault();
    EmployeeServices.saveEmployee(employee)
      .then((response) => {
        console.log(response.data);
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
          <h1>Add Employee</h1>
        </div>
        <form>
          <div className="user-box">
            <input
              type="text"
              id="name"
              name="name"
              value={employee.name}
              required
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              id="email"
              name="email"
              value={employee.email}
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="user-box">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={employee.phone}
              required
              pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="phone">Phone</label>
          </div>
          <center>
            <a href="/" onClick={handleSaveEmployee}>
              ADD Employee
              <span></span>
            </a>
          </center>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
