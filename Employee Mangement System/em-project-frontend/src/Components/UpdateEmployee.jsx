import React from "react";
import '../ComponentsStyle/Edit-AddEmployee.css';
const UpdateEmployee = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Update Employee</h1>
        <form>
          <div className="user-box" >
            <input type="text" name="" required="" />
            <label style={{transform:"translateX(90%) translateY(-50%)"}}>ID</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Phone</label>
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
}

export default UpdateEmployee;
