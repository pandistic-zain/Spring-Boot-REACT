import React from "react";
import "../ComponentsStyle/Tables.css";
import { useNavigate } from 'react-router-dom';
export default function Tables() {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/updateemployee'); 
  };
  const handleDeleteClick = () => {

  };
  return (
    <>
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td
                style={{ padding: "10px", whiteSpace: "nowrap", width: "1%" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <button
                    type="button"
                    className="btn btn-danger"
                    style={{ marginRight: 10 }}
                    onClick={handleDeleteClick}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-info"
                    onClick={handleEditClick}
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
