import React from 'react'

const UpdateEmployee = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Add Employee</h1>
        <form>
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
              ADD Employee
              <span></span>
            </a>
          </center>
        </form>
      </div>
    </div>
  );
}

export default UpdateEmployee
