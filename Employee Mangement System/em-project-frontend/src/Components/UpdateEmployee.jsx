import React from "react";
import "../ComponentsStyle/Edit-AddEmployee.css";
const UpdateEmployee = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="button-name">
          <button>
            <span className="arrow-back"></span>
          </button>
          <h1>Update Employee</h1>
        </div>
        <form>
          <div className="user-box">
            <input type="number" name="" required="" />
            <label style={{ transform: "translateX(90%) translateY(-50%)" }}>
              ID
            </label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              id="email"
              name="email"
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="user-box">
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
            />
            <label htmlFor="phone">Phone</label>
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
