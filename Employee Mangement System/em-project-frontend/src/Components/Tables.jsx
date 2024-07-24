import { React, useState, useEffect } from "react";
import "../ComponentsStyle/Tables.css";
import { useNavigate } from "react-router-dom";
import EmployeeServices from "../Services/EmployeeServices";
import Loader from "../Components/Loader";

export default function Tables() {
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeServices.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/updateemployee");
  };

  const handleDeleteClick = (id) => {
    // Implement delete functionality here
    
    console.log(`Delete employee with id: ${id}`);
  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {loading ? (
          <Loader />
        ) : (
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <th scope="row">{employee.id}</th>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td
                  style={{
                    padding: "10px",
                    whiteSpace: "nowrap",
                    width: "1%",
                  }}
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
                      onClick={() => handleDeleteClick(employee.id)}
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
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}
