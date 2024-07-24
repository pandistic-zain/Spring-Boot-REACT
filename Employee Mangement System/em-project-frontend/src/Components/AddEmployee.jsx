import React from "react";
import "../ComponentsStyle/Edit-AddEmployee.css";

const AddEmployee = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Add Employee</h1>
        <form>
          <div className="user-box">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="user-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            />
          </div>
          <div className="user-box">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
            />
          </div>
          <center>
            <a href="/">
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
