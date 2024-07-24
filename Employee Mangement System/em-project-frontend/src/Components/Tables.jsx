import React from "react";
import "../ComponentsStyle/Tables.css";
export default function Tables() {
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
                  >
                    Delete
                  </button>
                  <button type="button" className="btn btn-warning">
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
