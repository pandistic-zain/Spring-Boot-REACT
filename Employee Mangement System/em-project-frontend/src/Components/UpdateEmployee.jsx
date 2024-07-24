import React from "react";
import "../ComponentsStyle/Edit-AddEmployee.css";
const UpdateEmployee = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Update Employee</h1>
        <form>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label style={{ transform: "translateX(90%) translateY(-50%)" }}>
              ID
            </label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Name</label>
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
              UPDATE
              <span></span>
            </a>
          </center>
        </form>
      </div>
    </div>
  );
};

export default UpdateEmployee;