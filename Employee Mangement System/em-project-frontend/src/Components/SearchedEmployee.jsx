import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import EmployeeServices from "../Services/EmployeeServices";
import Loader2 from "../Components/Loader2";
import NavBar from "../Components/NavBar";
import "../ComponentsStyle/Tables.css";

export default function SearchedEmployee() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);
      try {
        const response = await EmployeeServices.getEmployeeByName(name);
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      } finally {
        setLoading(false);
      }
    };

    if (name) {
      fetchEmployees();
    }
  }, [name]);

  const navigate = useNavigate();

  const handleEditClick = (e, id) => {
    navigate(`/updateemployee/${id}`);
  };

  const handleDeleteClick = (e, id) => {
    e.preventDefault();
    EmployeeServices.deleteEmployee(id).then(() => {
      setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
      console.log(`Deleted employee with id: ${id}`);
    }).catch(error => {
      console.error("Error deleting employee:", error);
    });
  };

  return (
    <>
      <NavBar />
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
            <Loader2 />
          ) : (
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <th scope="row">{employee.id}</th>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td style={{ padding: "10px", whiteSpace: "nowrap", width: "1%" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <button type="button" className="btn btn-danger" style={{ marginRight: 10 }} onClick={(e) => handleDeleteClick(e, employee.id)}>Delete</button>
                      <button type="button" className="btn btn-outline-info" onClick={(e)=> handleEditClick(e, employee.id)}>Edit</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
}
